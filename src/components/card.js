import { Container, Box, BoxTitle, BoxText } from './card.styled'

export const Card=({data})=>{
    return (<Container>
        {data?.getData.map((box, index) => (
          <Box key={index + box.name} bgColor='lightgray'>
            <BoxTitle>Name<BoxText>{box.name}</BoxText></BoxTitle>
            <BoxTitle>Email Address<BoxText>{box.email}</BoxText></BoxTitle>
            <BoxTitle>Home Address<BoxText>{box.address}</BoxText></BoxTitle>
            <BoxTitle>Phone Number <BoxText>{box.phone}</BoxText></BoxTitle>
          </Box>
        ))}
      </Container>)
}