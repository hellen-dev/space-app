import styled from "styled-components";

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

const BarraLateral = () => {
    return (
      <aside>n
        <nav>
         <ListaEstilizada>
            {/* <ItemNavegacao> */}
                
            {/* </ItemNavegacao> */}
         </ListaEstilizada>
        </nav>
      </aside>
    );
  }
  
  export default BarraLateral;
  