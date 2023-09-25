function convertData() {
    var data = document.getElementById("textarea1").value; // Lấy dữ liệu từ text box
    var dataArray = data.split("\n"); // Tách dữ liệu thành các dòng
    console.log(dataArray);
    var subject1 = null; // Khởi tạo biến subject1

    for (var i = 1; i < dataArray.length; i++) {
        var subjectData = dataArray[i].split("\t"); // Tách dữ liệu của mỗi dòng thành các cột

        // Kiểm tra nếu mã môn học là '841072'
        if (subjectData[0] === '841072') {
            subject1 = {
                maMH: subjectData[0],
                tenMH: subjectData[1],
                nhomMH: subjectData[2],
                thu: subjectData[8],
                tietBD: parseInt(subjectData[9]),
                soTiet: parseInt(subjectData[10]),
                phong: subjectData[11]
            };
            break; // Kết thúc vòng lặp sau khi tìm thấy môn học
        }
    }

    console.log(subject1); // In ra biến subject1 để kiểm tra
}