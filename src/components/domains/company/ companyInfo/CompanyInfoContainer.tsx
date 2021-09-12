import CompanyInfo from "@/components/domains/company/ companyInfo/CompanyInfo";

interface Props {
  name: string
  imagePath: string
}

const CompanyInfoContainer = ({name, imagePath}: Props) => {

  return (
    <CompanyInfo companyName={name} imagePath={imagePath} />
  )
}

export default CompanyInfoContainer

