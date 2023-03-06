const copyButtonLabel = "Copy";
const copiedButtonLabel = "Copied";

let codeBlocks = document.querySelectorAll("pre");

codeBlocks.forEach((codeBlock) => {
    if (navigator.clipboard) {
        let copyButton = document.createElement("button");

        copyButton.innerText = copyButtonLabel;
        codeBlock.appendChild(copyButton);

        copyButton.addEventListener("click", async() => {
            await copyCodeBlock(codeBlock, copyButton);
        });
    }
});

async function copyCodeBlock(codeBlock, copyButton) {
    let codeText = codeBlock.querySelector("code").innerText;

    await navigator.clipboard.writeText(codeText);

    copyButton.innerText = copiedButtonLabel;

    setTimeout(() => {
        copyButton.innerText = copyButtonLabel;
    }, 700);
}