import { useState } from "react"
import { GigCard } from "../../components/gigCard/GigCard";
import { houses } from "../../data"
import { BreadCrumb, Budget, BudgetButton, BudgetInput, CardsContainer, Container, DownImg, HousesContainer, Menu, MenuLeft, MenuRight, SortBy, SortMenu, SortType, Title } from "./Styles"

export const Houses = () => {

  const [open, setOpen] = useState<Boolean>(false);
  const [sort, setSort] = useState<String>("sales");

  const reSort = (type: string) => {
    setSort(type)
    setOpen(false)
  }

  return (
    <HousesContainer>
        <Container>
          <BreadCrumb>Cidades -- Porto Alegre</BreadCrumb>
          <Title>Casas</Title>
          <Menu>
            <MenuLeft>
              <Budget>Faixa de Preço:</Budget>
              <BudgetInput type="text" placeholder="Min" />
              <BudgetInput type="text" placeholder="Max" />
              <BudgetButton>Apply</BudgetButton>
            </MenuLeft>
            <MenuRight>
              <SortBy>Por</SortBy>
              <SortType>{sort === "sales" ? "Melhor Preço" : "Mais Novos"}</SortType>
              <DownImg src="https://w7.pngwing.com/pngs/175/947/png-transparent-arrow-computer-icons-down-arrow-angle-black-desktop-wallpaper-thumbnail.png" alt="" onClick={() => setOpen(!open)} />
              {open && 
               <SortMenu>
               <span style={{cursor: "pointer"}} onClick={() =>reSort("createdAt")}>Mais Novos</span>
               <span style={{cursor: "pointer"}} onClick={() =>reSort("sales")}>Melhor Preço</span>
               </SortMenu>
              }
            </MenuRight>
          </Menu>
          <CardsContainer>
            {houses.map((house) => (
              <GigCard key={house.id} item={house} />
            ))}
          </CardsContainer>
        </Container>
    </HousesContainer>
  )
}
