function convertData() {
    var data = document.getElementById("textarea1").value; // Lấy dữ liệu từ text box
    var dataArray = data.split("\n"); // Tách dữ liệu thành các dòng
    console.log(dataArray);

    // Biểu thức chính quy để kiểm tra
    var regex = /^8|BO|CA/;
    const validDays = ["Hai", "Ba", "Tư", "Năm", "Sáu", "Bảy", "Chủ nhật"];

    var subjects = []; // Khởi tạo biến subject1

    for (var i = 0; i < dataArray.length; i++) {
        var subjectData = dataArray[i].split("\t"); // Tách dữ liệu của mỗi dòng thành các cột
        console.log(subjectData);

        var aSubject = null;
        // Kiểm tra mã môn học
        if (regex.test(subjectData[0]) && subjectData[0].length >= 3) {
            console.log(i);
            aSubject = {
                maMH: subjectData[0],
                tenMH: subjectData[1],
                nhomMH: subjectData[2],
                thu: [],
                tietBD: [],
                soTiet: [],
                phong: []
            };
            // subjects.push(aSubject);

            for (var j = i; j <= i + 9; j++) {
                console.log('đang duyệt vị trí ' + j);

                if (validDays.includes(dataArray[j])) { // điều kiện để duyệt thứ
                    // console.log('đang duyệt tại ' + j);
                    aSubject.thu.push(dataArray[j]);
                    var indexOfdataArray = j;
                } else if (dataArray[j] != null && (dataArray[j].startsWith("C.") || dataArray[j].startsWith("1.") || dataArray[j].startsWith("2.")) && dataArray[j].length > 3) {
                    // console.log('đang duyệt phòng tại ' + j);
                    aSubject.phong.push(dataArray[j]);
                }
            }
            if (aSubject.thu.length == 2) {
                aSubject.tietBD.push(dataArray[indexOfdataArray + 1]);
                aSubject.tietBD.push(dataArray[indexOfdataArray + 2]);
                aSubject.soTiet.push(dataArray[indexOfdataArray + 3]);
                aSubject.soTiet.push(dataArray[indexOfdataArray + 4]);
            } else {
                aSubject.tietBD.push(dataArray[indexOfdataArray + 1]);
                aSubject.soTiet.push(dataArray[indexOfdataArray + 2]);
            }
            subjects.push(aSubject);
        }
    }

    console.log(subjects); // In ra biến subject1 để kiểm tra
}