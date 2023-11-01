// Import the IBM Cloud SDK
import { CloudObjectStorageV1 } from 'ibm-watson/cloud-object-storage';

// Initialize the Object Storage service with your API credentials
const cos = new CloudObjectStorageV1({
  apiKeyId: 'YIyVgQ8Q05aThNAPH2OO8HuWZwxI9nXR8QcifRM2SNzR',
  serviceInstanceId: 'crn:v1:bluemix:public:cloud-object-storage:global:a/d152a5f59a3d49ac911341c2856c10f3:92b129d1-78d7-4588-aa47-e9dc1efc0761::',
});

// Function to upload the selected file
function uploadFile() {
  const fileInput = document.getElementById('add-video');
  const file = fileInput.files[0];

  if (file) {
    const bucketName = 'videosuploades'; 
    const objectName = file.name;

    cos.putObject({
      Bucket: bucketName,
      Key: objectName,
      Body: file,
    })
      .then(response => {
        console.log('File uploaded successfully', response);
      })
      .catch(error => {
        console.error('Error uploading file', error);
      });
  }
}
