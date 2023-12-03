import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from googleapiclient.http import MediaFileUpload


def upload_with_conversion():
  """Upload file with conversion
  Returns: ID of the file uploaded

  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity
  for guides on implementing OAuth2 for the application.
  """
  creds, _ = google.auth.default()

  try:
    # create drive api client
    service = build("drive", "v3", credentials=creds)

    file_metadata = {
        "name": "My Report",
        "mimeType": "application/vnd.google-apps.spreadsheet",
    }
    media = MediaFileUpload("EnergyUsage.xls") # , mimetype="application/vnd.ms-excel", resumable=True)
    # pylint: disable=maybe-no-member
    file = (
        service.files()
        .create(body=file_metadata, media_body=media, fields="id")
        .execute()
    )
    print(f'File with ID: "{file.get("id")}" has been uploaded.')

  except HttpError as error:
    print(f"An error occurred: {error}")
    file = None

  return file.get("id")


if __name__ == "__main__":
  upload_with_conversion()
  