import styled from 'styled-components'
import { COLORS, FONT_SIZES } from "@/constants/Styles"
import Image from 'next/image'
// import assets
import DefaultCompanyImage from '../../../../public/stmn.png'
import { companyRepository } from "@/repository/companyRepository";
// import component
import CompanyStackList from "@/components/domains/company/CompanyStackList";

const mockData = {
    "data": {
    "company": {
      "id": "1",
        "name": "dev tech stack",
        "defaultImagePath": DefaultCompanyImage,
        "stacks": [
        {
          "id": "1",
          "name": "React",
          "defaultImagePath": DefaultCompanyImage
        },
        {
          "id": "2",
          "name": "Rails",
          "defaultImagePath": DefaultCompanyImage
        },
        {
          "id": "3",
          "name": "Swift",
          "defaultImagePath": DefaultCompanyImage
        },
        {
          "id": "4",
          "name": "GraphQl",
          "defaultImagePath": DefaultCompanyImage
        },
        {
          "id": "5",
          "name": "Mysql",
          "defaultImagePath": DefaultCompanyImage
        }
      ]
    }
  }
}

interface Props {
  companyId: string
}

const CompanyContainer = ({companyId}: Props) => {
  console.log(companyId)
  // const { data, loading } = companyRepository().useGetCompany({id: companyId})
  // console.log(data, loading)

  // 一旦Mockデータを流す
  return (
    <div>
      <BaseInfoWrapper>
        <Image src={mockData.data.company.defaultImagePath} height={75} width={75} />
        <CompanyName>{mockData.data.company.name}</CompanyName>
      </BaseInfoWrapper>
      <CompanyStackList stacks={mockData.data.company.stacks} />
    </div>
  )
}
export default CompanyContainer

const BaseInfoWrapper = styled.div`
  display: flex;
  margin: 70px 0 40px 60px;
`

const CompanyName = styled.p`
  margin 20px 0 0 20px;
  color: ${COLORS.TEXT_COLOR1};
  font-size: ${FONT_SIZES.FS_24};
`

