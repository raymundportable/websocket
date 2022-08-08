const url = 'ws://localhost:8081'
const connection = new WebSocket(url)

connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`)
}
connection.onmessage = (e) => {
  // Handle price data and update UI
}