export const calculateYear = dateOfBirth =>{
  let today = new Date()
  let birthDay = new Date(dateOfBirth)
  let years = today.getFullYear() - birthDay.getFullYear()
  let m = today.getMonth() - birthDay.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDay.getDate())) {
    years--
  }
  return years
}