export const downloadResume = () => {
    const link = document.createElement("a");

    link.href = "/Md_Opi_Korim_resume.pdf"; // file inside public folder
    link.download = "Md_Opi_Korim_resume.pdf"; // downloaded name

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};