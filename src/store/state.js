let city = '深圳'

try {
  if (localStorage.getItem('city')) {
    city = localStorage.getItem('city')
  }
} catch (err) {}

export default {
  city: city
}
