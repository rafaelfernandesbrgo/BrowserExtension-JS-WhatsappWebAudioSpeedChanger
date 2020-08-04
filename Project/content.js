
/*looks for the header every 1 second*/
const interval = setInterval(() => {


    /*get the header to put the news elements, eventually you need to change this tag */
    const header = document.querySelector("._1QUKR");

    if (header) {

        /* stop  when find header*/
        clearInterval(interval)


        /* create  input */
        const input = document.createElement("input");
        input.innerHTML = '<input type="number">';
        input.classList.add("SpeedValue");

        /* create  button */
        const button = document.createElement("button");
        button.innerHTML = "ok";
        button.classList.add("okButton");



        /* add click event */
        button.addEventListener("click", () => {
            const audios = document.querySelectorAll("audio");
            audios.forEach((audio) => {
                audio.playbackRate = input.value;
            })
            alert("Speed has been changed!")

        })


        /* add button  and input */
        header.appendChild(input);
        header.appendChild(button);


    }

}, 1000)