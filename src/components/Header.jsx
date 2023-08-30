
// funcionalidade do menu lateral do app 
//pegando cada id e jogando em uma contant
const btnOpen = document.querySelector('#btnOpen')
const btnClose = document.querySelector('#btnClose')
const menuLateral = document.querySelector('#menuLateral')


//Aplicando estilo na abertura e fechamneto o menu
const togglemenu = () => {
    menuLateral.classList.toggle('left-[0px]')
}


//evento de click do menu
[btnOpen, btnClose].forEach((el) => {
    el.addEventListener('click', () => togglemenu())
})

function Header() {

    return (
        <>
            <div className="fixed bottom-0 w-screen flex bg-purple-900 justify-around h-16 items-center rounded-t-xl text-3xl z-10">
                <a href="/"><i class="fa-solid fa-house active:scale-75"></i> </a>
                <a ><i class="fa-solid fa-magnifying-glass active:scale-75"></i> </a>
                <a><i class="fa-solid fa-comment active:scale-75"></i> </a>
            </div>

            <button className="rounded-r-xl fixed p-2 text-2xl top-10 bg-purple-700 z-40 shadow-[0_0_10px_black]" id="btnOpen"><i class="fa-solid fa-bars active:scale-75"></i></button>

            {/*    =========================== menu lateral =======================   */}
            <div className="w-52 h-screen fixed z-50 flex flex-col top-0 bg-purple-700 left-[-280px] transition-all shadow-[0_0_10px_black]" id="menuLateral">

                <button className="rounded-r-xl absolute p-2 text-2xl top-10 bg-purple-700 -right-8 " id="btnClose"><i class="fa-solid fa-xmark"></i></button>

                <img className="drop-shadow-[0_0_2px_]" src="src/assets/img/logo-rota-deitado1.png" alt="" />

                <div className="flex flex-col items-center gap-5 mt-10 text-xl font-bold ">
                    <a href="/">Inicio</a>
                    <a >Locais</a>
                    <a>Comentatios</a>
                </div>
            </div>

        </>
    )

}

export default Header