import styled from 'styled-components'
import { COLORS, FONT_SIZES } from "@/constants/Styles"
import Image from 'next/image'
// import assets
import DefaultCompanyImage from '../../../public/stmn.png'
import Header from "@/components/common/Header";

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

console.log(DefaultCompanyImage)

const Sample = () => (
  <div>
    <Header />
    <BaseInfoWrapper>
      <Image src={mockData.data.company.defaultImagePath} height={75} width={75} />
      <CompanyName>{mockData.data.company.name}</CompanyName>
    </BaseInfoWrapper>
  </div>
)

export default Sample

const BaseInfoWrapper = styled.div`
  display: flex;
  margin: 70px 0 0 60px;
`

const CompanyName = styled.p`
  margin 20px 0 0 20px;
  color: ${COLORS.TEXT_COLOR1};
  font-size: ${FONT_SIZES.FS_24};
`

