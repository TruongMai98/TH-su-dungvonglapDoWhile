let value = null;
do {
    value = prompt('nhap vao so tu 1 → 10');
}while (value < 1 || value > 10);
alert("so ban vua nhap la " + value);