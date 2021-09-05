import {Information} from "@/components/common/Information";

interface Props {
  companyName: string
  icon: string
}

const CompanyInfo = ({companyName,icon}: Props) => {

  return (
    <Information name={companyName} icon={icon} iconShape={'rouded'} isShare={true} />
  )
}

export default CompanyInfo
