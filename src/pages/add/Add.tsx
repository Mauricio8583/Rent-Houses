import { AddContainer, CityOption, CitySelect, Container, CreateButton, Desc, FileInput, HouseNameInput, Label, Left, NumberInput, PriceInput, Right, Sections, TextInput, Title, YearInput } from "./Styles"

export const Add = () => {

  return (
    <AddContainer>
        <Container>
          <Title>Adicionar novo imovel</Title>
          <Sections>
            <Left>
              <Label htmlFor="">Nome do imovel</Label>
              <HouseNameInput type="text" placeholder="Nome do Imovel" />
              <Label htmlFor="">Cidade</Label>
              <CitySelect name="cities" id="cities">
                <CityOption value="porto alegre">Porto Alegre</CityOption>
                <CityOption value="caxias do sul">Caxias do Sul</CityOption>
                <CityOption value="gramado">Gramado</CityOption>
                <CityOption value="imbe">Imbé</CityOption>
                <CityOption value="capao da canoa">Capão da Canoa</CityOption>
                <CityOption value="tramandai">Tramandai</CityOption>                
              </CitySelect>
              <Label htmlFor="">Imagem principal</Label>
              <FileInput type="file" />
              <Label htmlFor="">Enviar mais imagens</Label>
              <FileInput type="file" multiple />
              <Label htmlFor="">Descrição</Label>
              <Desc cols={30} rows={16} placeholder="Breve descrição do imovel"></Desc>
              <CreateButton>Adicionar</CreateButton>
            </Left>
            <Right>
              <Label htmlFor="">Tipo de imovel</Label>
              <TextInput type="text" placeholder="tipo do imovel" />
              <Label htmlFor="">Ano</Label>
              <YearInput type="text" placeholder="ano de construção" />
              <Label htmlFor="">Número</Label>
              <NumberInput type="text" placeholder="numero do imovel" />
              <Label htmlFor="">Preço</Label>
              <PriceInput type="number" min={0} />
            </Right>
          </Sections>
        </Container>
    </AddContainer>
  )
}
