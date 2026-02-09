import Card from "./Card.jsx"
function Cards(props) {
    return (
        <>
            <div className="row mx-5">
                <Card titulo={"HTML"} descripcion={"Es un lenguaje que define la estructura de una web."}/>
                <Card titulo={"CSS"} descripcion={"Es un lenguaje que permite personalizar los estilos de la web."}/>
                <Card titulo={"JavaScript"} descripcion={"JavaScript nos permite agregar funcionalidad a los elementos de la Web."}/>
                <Card titulo={"React"} descripcion={"React nos permite elaborar componentes que puedan ser reutilizados en el tiempo"} />
            </div>
        </>
    )

}

export default Cards