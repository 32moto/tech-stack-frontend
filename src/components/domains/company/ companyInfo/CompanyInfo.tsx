import {Information} from "@/components/common/Information";

interface Props {
  companyName: string
  imagePath: string
}

const CompanyInfo = ({companyName,imagePath}: Props) => {

  return (
    <Information name={companyName} icon={imagePath} iconShape={'rouded'} isShare={true} />
  )
}

export default CompanyInfo
