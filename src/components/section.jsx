import { SectionTitle, SectionWrapper } from "./App.styled"

export const Section = ({title, children}) => {
  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrapper>
  )
}