import styled from 'styled-components'

export const VideosContainer = styled.div`
  min-height: 100vh;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const SearchInputContainer = styled.div`
  background-color: transparent;
  min-height: 10vh;
  padding-left: 15px;
  padding-top: 15px;
  display: flex;
  margin-bottom: 15px;
  @media screen and (max-width: 767px) {
    padding-left: 5px;
    width: 100%;
  }
`
export const SearchInput = styled.input`
  height: 35px;
  width: 400px;
  background-color: transparent;
  padding: 10px;
  border: 1px solid #7e858e;
  color: ${props => props.color};
  font-family: Roboto;
  font-size: 15px;
`

export const SearchButton = styled.button`
  background-color: transparent;
  height: 35px;
  border: 1px solid #7e858e;
  width: 78px;
  background-color: ${props => props.bgColor};
  padding: 10px;
  color: ${props => props.color};
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FailureImg = styled.img`
  height: 300px;
  @media screen and (max-width: 767px) {
    height: 200px;
  }
`
export const FailureHeading = styled.h1`
  color: ${props => props.color};
  text-align: center;
  font-family: Roboto;
  font-size: 28px;
  @media screen and (max-width: 767px) {
    font-size: 25px;
  }
`
export const FailureText = styled.p`
  color: ${props => props.text};
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  line-height: 1.87;
  margin-top: 0px;
  font-weight: 500;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  height: 35px;
  width: 100px;
  border: none;
  outline: none;
  cursor: pointer;
  color: #f1f1f1;
  font-family: Roboto;
  font-size: 13px;
  font-weight: 500;
  border-radius: 3px;
  padding: 8px;
`
export const VideoRetryButton = styled(RetryButton)`
  height: 38px;
`
export const UnorderedList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
  @media screen and (max-width: 576px) {
    justify-content: center;
    align-items: center;
  }
`
