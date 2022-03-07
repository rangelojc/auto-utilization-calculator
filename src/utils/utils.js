import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//https://stackoverflow.com/a/58114887/7325182
export function createPDFfromHTML(name) {
    let HTML_Width = document.querySelector("#reports_cont").offsetWidth;
    let HTML_Height = document.querySelector("#reports_cont").offsetHeight;
    let top_left_margin = 15;
    let PDF_Width = HTML_Width + (top_left_margin * 2);
    let PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
    let canvas_image_width = HTML_Width;
    let canvas_image_height = HTML_Height;

    let totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

    html2canvas(document.querySelector("#reports_cont")).then(function (canvas) {
        let imgData = canvas.toDataURL("image/jpeg", 1.0);
        let pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
        pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);

        for (let i = 1; i <= totalPDFPages; i++) {
            pdf.addPage();
            pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
        }

        pdf.save(name + " Report" + ".pdf");
        // document.querySelector("#reports_cont").style.display = "none";
    });
}