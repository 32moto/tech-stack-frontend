import CompanyInfo from "@/components/domains/company/ companyInfo/CompanyInfo";

interface Props {
  companyName: string
  icon: string
}

const CompanyInfoContainer = ({companyName,icon}: Props) => {

  return (
    <CompanyInfo companyName={companyName} icon={icon} />
  )
}

export default CompanyInfoContainer

