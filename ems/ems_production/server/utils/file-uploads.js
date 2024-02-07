const dayjs = require("dayjs");  //for date
var fs = require("fs");
exports.fileuploader = async function (file, directory) {
  return new Promise(async (resolve, reject) => {
    try {
      if (file) {
        let mime_type = file.split(";")[0].split(":")[1].split("/")[1];
        if (
          mime_type == "mp4" ||
          mime_type == "png" ||
          mime_type == "jpg" ||
          mime_type == "jpeg" ||
          mime_type == "pdf"
        ) {
          let file_name =
            dayjs() + String(Math.floor(Math.random() * 100)) + "." + mime_type;
            console.log("file name",file_name);
          let upload_path = `uploads/${directory}`;
          let base64File = file.split(";base64,").pop();
          fs.mkdir(upload_path, { recursive: true }, (err) => {  //recursive for create nexted files
            if (err) {
              reject(err);
            } else {
              upload_path = `uploads/${directory}/${file_name}`;
              fs.writeFile(
                upload_path,
                base64File,
                { encoding: "base64" },
                function (err) {
                  if (err) reject(err);
                  resolve(upload_path);
                }
              );
            }
          });
        } else {
          reject(
            "file size upto 100 mb and format .mp4,.png,.jpg,.jpeg,.pdf  are  allowed"
          );
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};
