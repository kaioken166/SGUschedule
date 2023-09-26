// window.onload = function () {

// }

var storedSubjects = JSON.parse(localStorage.getItem('danhsachmonHoc'));

function renderTable() {
    var tableHead =
        `<thead>
            <tr class="table-primary">
                <th class="border-end px-4">Thứ/Giờ</th>
                <th class="border-end px-4">Thứ hai</th>
                <th class="border-end px-4">Thứ ba</th>
                <th class="border-end px-4">Thứ tư</th>
                <th class="border-end px-4">Thứ năm</th>
                <th class="border-end px-4">Thứ sáu</th>
                <th class="border-end px-4">Thứ bảy</th>
                <th class="border-end px-4">Chủ nhật</th>
            </tr>
        </thead>`;

    var string =
        `<tr>
            <td class="border-end align-middle bg-light px-4">7h</td>
                
            <td class="border-end px-4"></td>
        </tr>
        <tr>
            <td class="border-end align-middle bg-light px-4">7h50</td>
                
            <td class="border-end px-4"></td>
        </tr>
        <tr>
            <td class="border-end align-middle bg-light px-4">9h</td>
                
            <td class="border-end px-4"></td>
        </tr>
        <tr>
            <td class="border-end align-middle bg-light px-4">9h50</td>
                
            <td class="border-end px-4"></td>
        </tr>
        <tr>
            <td class="border-end align-middle bg-light px-4">10h40</td>
            
            <td class="border-end px-4"></td>
        </tr>
        <tr>
            <td colspan="8" class="text-center align-middle">Nghỉ trưa</td>
        </tr>
        <tr>
            <td class="border-end align-middle bg-light px-4">1h</td>
            
            <td class="border-end px-4"></td>
        </tr>
        <tr>
            <td class="border-end align-middle bg-light px-4">1h50</td>
            
            <td class="border-end px-4"></td>
        </tr>
        <tr>
            <td class="border-end align-middle bg-light px-4">3h</td>
            
            <td class="border-end px-4"></td>
        </tr>
        <tr>
            <td class="border-end align-middle bg-light px-4">3h50</td>
            
            <td class="border-end px-4"></td>
        </tr>
        <tr>
            <td class="border-end align-middle bg-light px-4">4h40</td>
            
            <td class="border-end px-4"></td>
        </tr>`;

    var tableBody = `<tbody>` + string + `</tbody>`;

    document.getElementById("scheduletable").innerHTML = tableHead + tableBody;
}