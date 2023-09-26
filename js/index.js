function convertData() {
    var data = document.getElementById("textarea1").value; // Lấy dữ liệu từ text box
    var dataArray = data.split("\n"); // Tách dữ liệu thành các dòng
    console.log(dataArray);

    // Biểu thức chính quy để kiểm tra
    var regex = /^8|BO|CA/;

    var subjects = []; // Khởi tạo biến subject1

    for (var i = 0; i < dataArray.length; i++) {
        var subjectData = dataArray[i].split("\t"); // Tách dữ liệu của mỗi dòng thành các cột
        console.log(subjectData);

        var aSubject = null;
        // Kiểm tra nếu mã môn học là '841072'
        if (regex.test(subjectData[0]) && subjectData[0].length >= 3) {
            console.log(i);
            aSubject = {
                maMH: subjectData[0],
                tenMH: subjectData[1],
                nhomMH: subjectData[2],
                thu: subjectData[8],
                tietBD: parseInt(subjectData[9]),
                soTiet: parseInt(subjectData[10]),
                phong: subjectData[11]
            };
            // subjects.push(aSubject);
            // Kết thúc vòng lặp sau khi tìm thấy môn học
        }
    }

    console.log(subjects); // In ra biến subject1 để kiểm tra
}