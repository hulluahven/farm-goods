const featuresList = [
  {
    id: 0,
    title: "Еда намного вкуснее",
    type: "Фермерские продукты",
    isNegative: false,
    about:
      "Домашняя колбаса из&nbsp;мяса, соли и&nbsp;специй и&nbsp;колбаса из&nbsp;магазина&nbsp;&mdash; два настолько разных продукта, что они даже не&nbsp;родственники",
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA0OCA1MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0LjY0MjEgNDYuMTY1NkMzNy4zOTA0IDQ2LjE2NTYgNDcuNzI0OSAzNS44MzEgNDcuNzI0OSAyMy4wODI4QzQ3LjcyNDkgMTAuMzM0NSAzNy4zOTA0IDAgMjQuNjQyMSAwQzExLjg5MzggMCAxLjU1OTMzIDEwLjMzNDUgMS41NTkzMyAyMy4wODI4QzEuNTU5MzMgMzUuODMxIDExLjg5MzggNDYuMTY1NiAyNC42NDIxIDQ2LjE2NTZaIiBmaWxsPSIjRDhFQ0ZFIi8+CjxwYXRoIGQ9Ik00Ny43MjQ3IDIzLjA4MzJDNDcuNzI0NyAzNS44MzE0IDM3LjM5MDYgNDYuMTY1NSAyNC42NDI0IDQ2LjE2NTVDMTcuODUxOSA0Ni4xNjU1IDExLjc0NTkgNDMuMjMzMSA3LjUyMTk0IDM4LjU2NjFDMTEuNjE3MyA0Mi4yNzE4IDE3LjA0ODMgNDQuNTI3OSAyMy4wMDQ5IDQ0LjUyNzlDMzUuNzUzMSA0NC41Mjc5IDQ2LjA4NzIgMzQuMTkzOCA0Ni4wODcyIDIxLjQ0NTZDNDYuMDg3MiAxNS40ODU5IDQzLjgyODkgMTAuMDUyOSA0MC4xMjAxIDUuOTU3NDZDNDQuNzkwMyAxMC4xODE0IDQ3LjcyNDcgMTYuMjg5NSA0Ny43MjQ3IDIzLjA4MzJaIiBmaWxsPSIjQzRFMkZGIi8+CjxwYXRoIGQ9Ik0yNC42NDIxIDM5LjE3NDJDMzMuNTI5MiAzOS4xNzQyIDQwLjczMzYgMzEuOTY5OCA0MC43MzM2IDIzLjA4MjhDNDAuNzMzNiAxNC4xOTU3IDMzLjUyOTIgNi45OTEyNyAyNC42NDIxIDYuOTkxMjdDMTUuNzU1IDYuOTkxMjcgOC41NTA2MyAxNC4xOTU3IDguNTUwNjMgMjMuMDgyOEM4LjU1MDYzIDMxLjk2OTggMTUuNzU1IDM5LjE3NDIgMjQuNjQyMSAzOS4xNzQyWiIgZmlsbD0iI0IzREFGRSIvPgo8cGF0aCBkPSJNNDAuNzMzNiAyMy4wODMyQzQwLjczMzYgMzEuOTcgMzMuNTI5MiAzOS4xNzQ0IDI0LjY0MjQgMzkuMTc0NEMxOS43ODEgMzkuMTc0NCAxNS40MjQzIDM3LjAxOTYgMTIuNDc0MiAzMy42MTI4QzE1LjI5NjggMzYuMDU4MSAxOC45Nzg0IDM3LjUzNjggMjMuMDA0OCAzNy41MzY4QzMxLjg5MTcgMzcuNTM2OCAzOS4wOTYgMzAuMzMyNCAzOS4wOTYgMjEuNDQ1NkMzOS4wOTYgMTcuNDE5MSAzNy42MTczIDEzLjczNzYgMzUuMTcxOSAxMC45MTVDMzguNTc4NyAxMy44NjUxIDQwLjczMzYgMTguMjIxOCA0MC43MzM2IDIzLjA4MzJaIiBmaWxsPSIjOEFDOUZFIi8+CjxwYXRoIGQ9Ik0xMi43MTUxIDUxLjk4MzlMMTIuMzcyNCA1MS45Mzg2QzExLjM1ODggNTEuODA0OCAxMC42NDU3IDUwLjg3NDYgMTAuNzc5NyA0OS44NjFMMTMuOTEwMSAyNi4xNjI2TDE3LjkyMzMgMjYuNjkyN0wxNC43OTI3IDUwLjM5MTFDMTQuNjU4OCA1MS40MDQ2IDEzLjcyODYgNTIuMTE3NyAxMi43MTUxIDUxLjk4MzlaIiBmaWxsPSIjNjg1RTY4Ii8+CjxwYXRoIGQ9Ik0xNy45MjMgMjYuNjkyN0wxNC43OTk0IDUwLjMzODNDMTQuNjYxNSA1MS4zODEyIDEzLjcwNDIgNTIuMTE0OCAxMi42NjEzIDUxLjk3NjlMMTIuNDI1MSA1MS45NDU1QzEyLjAyMzcgNTEuODkyMiAxMS42Njg1IDUxLjcxODcgMTEuMzkxNiA1MS40NjQ3QzEyLjEyNjIgNTEuMjgwOCAxMi43MDgzIDUwLjY2NDIgMTIuODEzOSA0OS44NjhMMTUuOTEwMyAyNi40MjcyTDE3LjkyMyAyNi42OTI3WiIgZmlsbD0iIzU1NEU1NiIvPgo8cGF0aCBkPSJNMTguMjQ0OSA4LjgwMjE1TDE0LjIxMTcgOC4yNjkzMkMxMy45MTQ4IDguMjMwMTIgMTMuNjQyNSA4LjQzODkgMTMuNjAzMyA4LjczNTc0TDEyLjM5MjQgMTcuOTAyM0MxMi4yMTIyIDE5LjI2NjIgMTIuODA2NCAyMC41NzQ4IDEzLjg2MjUgMjEuMjk2MkMxNC4yNTU2IDIxLjU2NDggMTQuNDU0OCAyMi4wMzk1IDE0LjM5MjQgMjIuNTExNUwxMy45MTAyIDI2LjE2MjZMMTcuOTIzMyAyNi42OTI3TDE4LjQwNTYgMjMuMDQxNkMxOC40Njc5IDIyLjU2OTYgMTguNzgzNCAyMi4xNjI5IDE5LjIzMjggMjIuMDA1NkMyMC40NCAyMS41ODMxIDIxLjM1MzYgMjAuNDczNyAyMS41MzM3IDE5LjEwOTlMMjIuNzQ0NiA5Ljk0MzI2QzIyLjc4MzggOS42NDY0MyAyMi41NzUgOS4zNzQwOCAyMi4yNzgyIDkuMzM0ODhMMTguMjQ0OSA4LjgwMjE1WiIgZmlsbD0iI0UyREVFMiIvPgo8cGF0aCBkPSJNMjIuNzQ0NyA5Ljk0MzE2TDIxLjUzMzUgMTkuMTEwMUMyMS4zNTM3IDIwLjQ3MzggMjAuNDM5NCAyMS41ODM2IDE5LjIzMjQgMjIuMDA1OUMxOC43ODMgMjIuMTYyNiAxOC40Njc0IDIyLjU2OTIgMTguNDA1NyAyMy4wNDE1TDE3LjkyMyAyNi42OTI4TDE1LjkwNzEgMjYuNDI2M0wxNi40MjAyIDIyLjQ0MjdDMTYuNDgxOSAyMS45NzA0IDE2Ljc5NzUgMjEuNTYzOSAxNy4yNDY5IDIxLjQwNzFDMTguNDUzOSAyMC45ODM5IDE5LjM2ODIgMTkuODc1MSAxOS41NDggMTguNTExNEwyMC43NTkyIDkuMzQ0NTJDMjAuNzY4NiA5LjI3MTQxIDIwLjc2MzMgOS4xOTkzMSAyMC43NDQ1IDkuMTMyMzlMMjIuMjc4NiA5LjMzNTA4QzIyLjU3NTQgOS4zNzM2NyAyMi43ODM0IDkuNjQ2NDMgMjIuNzQ0NyA5Ljk0MzE2WiIgZmlsbD0iI0NCQzRDQyIvPgo8cGF0aCBkPSJNMTcuNDY4NiA4LjY5OTY2TDE2LjM4MDcgMTYuOTM0M0MxNi4zMjk1IDE3LjMyODMgMTUuOTkyIDE3LjYxNTcgMTUuNjA1MyAxNy42MTU3QzE1LjU3MDggMTcuNjE1NyAxNS41MzYzIDE3LjYxMzYgMTUuNTAxOCAxNy42MDk0QzE1LjA3MjQgMTcuNTUxOSAxNC43NzA0IDE3LjE1NzkgMTQuODI2NyAxNi43Mjk1TDE1LjkxNDYgOC40OTQ3M1Y4LjQ5MzcxTDE3LjQ2ODYgOC42OTk2NloiIGZpbGw9IiNCNUFEQjYiLz4KPHBhdGggZD0iTTIwLjU3NDQgOS4xMTAzMkwxOS40ODY1IDE3LjM0NUMxOS40MzQyIDE3LjczOSAxOS4wOTc4IDE4LjAyNjQgMTguNzExMSAxOC4wMjY0QzE4LjY3NjYgMTguMDI2NCAxOC42NDIxIDE4LjAyNDMgMTguNjA3NiAxOC4wMTkxQzE4LjE3ODIgMTcuOTYyNiAxNy44NzYyIDE3LjU2ODcgMTcuOTMyNSAxNy4xMzkyTDE5LjAyMDQgOC45MDQ0OEwyMC41NzQ0IDkuMTEwMzJaIiBmaWxsPSIjQjVBREI2Ii8+CjxwYXRoIGQ9Ik0zNi44NjUyIDUxLjk1MTRMMzYuNTIxNSA1MS45ODgxQzM1LjUwNSA1Mi4wOTY5IDM0LjU5MjggNTEuMzYxIDM0LjQ4NCA1MC4zNDQ0TDMxLjk0MDkgMjYuNTc1OEwzNS45NjU5IDI2LjE0NTFMMzguNTA5IDQ5LjkxMzhDMzguNjE3NyA1MC45MzA0IDM3Ljg4MTggNTEuODQyNiAzNi44NjUyIDUxLjk1MTRaIiBmaWxsPSIjNjg1RTY4Ii8+CjxwYXRoIGQ9Ik0zNi44MTE2IDUxLjk1N0wzNi41NzU0IDUxLjk4MkMzNi4xNjk5IDUyLjAyNDkgMzUuNzgwMiA1MS45MzgyIDM1LjQ0ODkgNTEuNzU0M0MzNi4xMjUgNTEuNDAzMSAzNi41NTE1IDUwLjY2MzMgMzYuNDY1NyA0OS44NjA3TDMzLjk1MTUgMjYuMzYwM0wzNS45NjYyIDI2LjE0NUwzOC41MDM1IDQ5Ljg2MDdDMzguNjE1NCA1MC45MDY3IDM3Ljg1NzcgNTEuODQ1MiAzNi44MTE2IDUxLjk1N1oiIGZpbGw9IiM1NTRFNTYiLz4KPHBhdGggZD0iTTM1Ljk2NTggMjYuMTQ1MkwzMS45NDA4IDI2LjU3NTlMMzEuNjI5MiAyMy42NjQyQzMxLjU3NzYgMjMuMTgyNSAzMS4zNDMxIDIyLjczOSAzMC45NzM5IDIyLjQyNTRMMzAuMTI5OSAyMS43MDg0QzI5LjY4MzMgMjEuMzI5IDI5LjQzODEgMjAuNzYzOSAyOS40NjYgMjAuMTc4NkwzMC4xMDkyIDYuNzEyMTRDMzAuMTUzNyA1Ljc4MTk0IDMwLjg2OTMgNS4wMjI5NSAzMS43OTUzIDQuOTIzODRDMzIuODMyNyA0LjgxMjg1IDMzLjc2MzcgNS41NjM4MSAzMy44NzQ3IDYuNjAxMjRMMzUuOTY1OCAyNi4xNDUyWiIgZmlsbD0iI0UyREVFMiIvPgo8cGF0aCBkPSJNMzUuOTY2MiAyNi4xNDUxTDMzLjk1NDUgMjYuMzYwNEwzMS44NjM1IDYuODIwNjZDMzEuNzkxNCA2LjE1MTg1IDMxLjM3OTYgNS42MDIxNiAzMC44MTc0IDUuMzI2MjVDMzEuMDkwMiA1LjEwNzgyIDMxLjQyNjYgNC45NjI2IDMxLjc5NTYgNC45MjM5MUMzMS44NjM1IDQuOTE2NiAzMS45MzE1IDQuOTEzNDUgMzEuOTk4MyA0LjkxMzQ1QzMyLjk1MjMgNC45MTM0NSAzMy43NzA2IDUuNjMxNDEgMzMuODc1MSA2LjYwMTExTDM1Ljk2NjIgMjYuMTQ1MVoiIGZpbGw9IiNDQkM0Q0MiLz4KPHBhdGggZD0iTTQyLjk0NTYgMy4wNjIwNUM0Mi41NDc0IDQuMzMzMTUgNDEuNTEzIDYuNjQzMjEgMzkuMTAxMyA3LjU0NDk3QzM4LjkwNDQgNy42MTg1OSAzOC45MDQ0IDcuOTAxOTIgMzkuMTAxMyA3Ljk3NTU0QzQxLjUxMzEgOC44NzczIDQyLjU0NzUgMTEuMTg3NCA0Mi45NDU2IDEyLjQ1ODVDNDMuMDEzIDEyLjY3MzQgNDMuMzE4NSAxMi42NzM0IDQzLjM4NiAxMi40NTg1QzQzLjc4NDIgMTEuMTg3NCA0NC44MTg2IDguODc3MyA0Ny4yMzAzIDcuOTc1NTRDNDcuNDI3MiA3LjkwMTkyIDQ3LjQyNzIgNy42MTg1OSA0Ny4yMzAzIDcuNTQ0OTdDNDQuODE4NSA2LjY0MzIxIDQzLjc4NDEgNC4zMzMxNSA0My4zODYgMy4wNjIwNUM0My4zMTg2IDIuODQ3MDcgNDMuMDEzMSAyLjg0NzA3IDQyLjk0NTYgMy4wNjIwNVoiIGZpbGw9IiNGREI0NDEiLz4KPHBhdGggZD0iTTQ3LjIzMDMgNy45NzU2N0M0NC44MTg1IDguODc3MTMgNDMuNzg0NCAxMS4xODcxIDQzLjM4NjQgMTIuNDU4NEM0My4zMTg3IDEyLjY3MzcgNDMuMDEzIDEyLjY3MzcgNDIuOTQ1MyAxMi40NTg0QzQyLjc2NzggMTEuODkxNiA0Mi40NjQ3IDExLjEyMTEgNDEuOTcwMSAxMC4zNTg0QzQyLjQxNTYgOS40MDk1NSA0Mi4zNTM5IDguNDc1NSA0My42OTIgNy45NzU1N0M0My44ODg4IDcuOTAxNzQgNDMuODg4OCA3LjYxODgyIDQzLjY5MiA3LjU0NDk5QzQyLjM1MzkgNy4wNDQxNSA0Mi40MTU2IDYuMTEwMiA0MS45NzAxIDUuMTYxMzJDNDIuNDY0NyA0LjM5OTU5IDQyLjc2NzggMy42MjgxMiA0Mi45NDUzIDMuMDYyMjhDNDMuMDEzIDIuODQ3IDQzLjMxODcgMi44NDcgNDMuMzg2NCAzLjA2MjI4QzQzLjc4NDQgNC4zMzI3NyA0NC44MTg1IDYuNjQyNjIgNDcuMjMwMyA3LjU0NDk5QzQ3LjQyNzIgNy42MTg5MiA0Ny40MjcyIDcuOTAxODQgNDcuMjMwMyA3Ljk3NTY3WiIgZmlsbD0iI0ZFQTYxMyIvPgo8cGF0aCBkPSJNMy40NDMzOCA0MC4xNTZDMy4xMjczNiA0MS4xNjQ3IDIuMzA2NDMgNDIuOTk4IDAuMzkyNDIxIDQzLjcxMzdDMC4yMzYxMzYgNDMuNzcyMSAwLjIzNjEzNiA0My45OTcxIDAuMzkyNDIxIDQ0LjA1NTRDMi4zMDY0MyA0NC43NzExIDMuMTI3MjYgNDYuNjA0MyAzLjQ0MzM4IDQ3LjYxMzFDMy40OTY4IDQ3Ljc4MzcgMy43Mzk0IDQ3Ljc4MzcgMy43OTI4MiA0Ny42MTMxQzQuMTA4ODQgNDYuNjA0NCA0LjkyOTc3IDQ0Ljc3MTIgNi44NDM3OCA0NC4wNTU0QzcuMDAwMDYgNDMuOTk3MSA3LjAwMDA2IDQzLjc3MjEgNi44NDM3OCA0My43MTM3QzQuOTI5NzcgNDIuOTk4MSA0LjEwODk0IDQxLjE2NDggMy43OTI4MiA0MC4xNTZDMy43MzkzIDM5Ljk4NTQgMy40OTY4IDM5Ljk4NTQgMy40NDMzOCA0MC4xNTZaIiBmaWxsPSIjRkRCNDQxIi8+CjxwYXRoIGQ9Ik02Ljg0MzY3IDQ0LjA1NTFDNC45Mjk2NyA0NC43NzA1IDQuMTA4OTQgNDYuNjAzNyAzLjc5MzEyIDQ3LjYxMjZDMy43Mzk0IDQ3Ljc4MzQgMy40OTY4IDQ3Ljc4MzQgMy40NDMwOCA0Ny42MTI2QzMuMzAyMjMgNDcuMTYyOCAzLjA2MTY2IDQ2LjU1MTMgMi42NjkwNyA0NS45NDYxQzMuMDIyNTYgNDUuMTkzIDIuOTczNjIgNDQuNDUxOCA0LjAzNTYyIDQ0LjA1NUM0LjE5MTgxIDQzLjk5NjQgNC4xOTE4MSA0My43NzE5IDQuMDM1NjIgNDMuNzEzM0MyLjk3MzYyIDQzLjMxNTggMy4wMjI1NiA0Mi41NzQ2IDIuNjY5MDcgNDEuODIxNUMzLjA2MTY2IDQxLjIxNyAzLjMwMjIzIDQwLjYwNDcgMy40NDMwOCA0MC4xNTU3QzMuNDk2OCAzOS45ODQ5IDMuNzM5NCAzOS45ODQ5IDMuNzkzMTIgNDAuMTU1N0M0LjEwODk0IDQxLjE2NCA0LjkyOTY3IDQyLjk5NzIgNi44NDM2NyA0My43MTMyQzYuOTk5ODYgNDMuNzcyIDYuOTk5ODYgNDMuOTk2NSA2Ljg0MzY3IDQ0LjA1NTFaIiBmaWxsPSIjRkVBNjEzIi8+Cjwvc3ZnPgo="
  },
  {
    id: 3,
    title: "Просроченные продукты",
    type: "Магазинные продукты",
    isNegative: true,
    about:
      "Из-за большого количество товара сотрудники магазинов не&nbsp;успевают своевременно производить замену товара",
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1NiA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQwLjQyNzQgMTcuOTU0N0w0MC43MDM4IDE3LjA2MTdDNDAuMjM5NCAxNS45ODg2IDM5LjE3MTcgMTUuMjM3NiAzNy45Mjc5IDE1LjIzNzZIMzUuMjgyNkMzMy43MTYxIDE1LjIzNzYgMzIuNDI4IDE2LjQyODggMzIuMjc0NCAxNy45NTQ3SDQwLjQyNzRaIiBmaWxsPSIjRkFDNjAwIi8+CjxwYXRoIGQ9Ik0zNS41OTA3IDE3Ljk1NDhWMTMuMDMzOUMzNS41OTA3IDEyLjY5NTggMzUuMzE2NiAxMi40MjE3IDM0Ljk3ODUgMTIuNDIxN0gyNy41MTAyQzI3LjE3MjIgMTIuNDIxNyAyNi44OTgxIDEyLjY5NTggMjYuODk4MSAxMy4wMzM5VjE3Ljk1NDhIMzUuNTkwN1oiIGZpbGw9IiNGRTk5MDEiLz4KPHBhdGggZD0iTTI5LjkxNjcgMTcuOTU0OFYxMy4wMzM5QzI5LjkxNjcgMTIuNjk1OCAzMC4xOTA4IDEyLjQyMTcgMzAuNTI4OSAxMi40MjE3SDI3LjUxMDJDMjcuMTcyMiAxMi40MjE3IDI2Ljg5ODEgMTIuNjk1OCAyNi44OTgxIDEzLjAzMzlWMTcuOTU0OEgyOS45MTY3WiIgZmlsbD0iI0ZCODgwMSIvPgo8cGF0aCBkPSJNMTUuODg3OCAxNy45NTQ3SDIzLjQxNjRDMjMuMTg1MiAxNS45NDMxIDIxLjQ3NzQgMTQuMzgwNiAxOS40MDM4IDE0LjM4MDZDMTcuNjU2NyAxNC4zODA2IDE2LjE2ODkgMTUuNDg5NSAxNS42MDUzIDE3LjA0MTlMMTUuODg3OCAxNy45NTQ3WiIgZmlsbD0iIzgwRDI2MSIvPgo8cGF0aCBkPSJNMTUuODg3OCAxNy45NTQ3SDE3Ljg1NTNDMTguMDM4NiAxNi4zNiAxOS4xNSAxNS4wNDgyIDIwLjYzNjEgMTQuNTcyNkMyMC4yNDc2IDE0LjQ0ODMgMTkuODMzNiAxNC4zODA2IDE5LjQwMzkgMTQuMzgwNkMxNy42NTY4IDE0LjM4MDYgMTYuMTY5IDE1LjQ4OTUgMTUuNjA1NCAxNy4wNDE5TDE1Ljg4NzggMTcuOTU0N1oiIGZpbGw9IiM2OENBNDQiLz4KPHBhdGggZD0iTTI4LjU1MzEgMTcuOTU0N0MyOC4wNDE4IDE2LjMwOTcgMjYuNTA3NiAxNS4xMTUxIDI0LjY5NDQgMTUuMTE1MUMyMi44ODEyIDE1LjExNTEgMjEuMzQ2OSAxNi4zMDk2IDIwLjgzNTYgMTcuOTU0N0gyOC41NTMxWiIgZmlsbD0iIzAwQTdEMyIvPgo8cGF0aCBkPSJNMjMuNTg4NCAxNy45NTQ3QzIzLjk2MzUgMTYuNzQ4MyAyNC44ODgzIDE1Ljc4NDEgMjYuMDcwNCAxNS4zNTU4QzI1LjY0MDkgMTUuMjAwMiAyNS4xNzc2IDE1LjExNTEgMjQuNjk0NCAxNS4xMTUxQzIyLjg4MTEgMTUuMTE1MSAyMS4zNDY4IDE2LjMwOTYgMjAuODM1NSAxNy45NTQ3SDIzLjU4ODRaIiBmaWxsPSIjMDA5NkQzIi8+CjxwYXRoIGQ9Ik0xNC44NjkgMi45NjY2NEMxNS4xMjQ0IDIuOTY2NjQgMTUuMzY0OSAzLjAzMTE3IDE1LjU3NTYgMy4xNDQxNkMxNS43ODcgMi44OTk5MiAxNS45NTc2IDIuNTg4MiAxNi4wNTY3IDIuMjI5NjdDMTYuMzMzMSAxLjIyOTk5IDE1Ljk1NTEgMC4yNTMyNjggMTUuMjEyNiAwLjA0Nzk3MTRDMTQuNDcgLTAuMTU3MzI1IDEzLjY0NCAwLjQ4NjU2NSAxMy4zNjc2IDEuNDg2MjVDMTMuMjE4NCAyLjAyNjAyIDEzLjI2MTMgMi41NTgwMiAxMy40NDggMi45NjY2NEgxNC44NjlaIiBmaWxsPSIjRDhFQ0ZFIi8+CjxwYXRoIGQ9Ik0xMi44ODggMi45NjY2NEgxMy43MDM4QzEzLjg5MTggMi40MDMzNiAxMy42NzQ2IDEuNjQ5ODcgMTMuMTAzNyAxLjA3ODk0QzEyLjM3MDMgMC4zNDU1NzcgMTEuMzM0MiAwLjE5MjY3MSAxMC43ODk0IDAuNzM3NDY4QzEwLjI0NDYgMS4yODIyNyAxMC4zOTc1IDIuMzE4MzcgMTEuMTMwOSAzLjA1MTczQzExLjMxOTQgMy4yNDAzIDExLjUyOCAzLjM4OTcgMTEuNzQzIDMuNDk5NTJDMTIuMDE4NSAzLjE3NDEyIDEyLjQyOTMgMi45NjY2NCAxMi44ODggMi45NjY2NFoiIGZpbGw9IiNDNEUyRkYiLz4KPHBhdGggZD0iTTEyLjg4OCA2LjA3NjU1SDE0Ljg2OTFDMTUuNzU0NCA2LjA3NjU1IDE2LjQ3ODcgNS4zNTIyNiAxNi40Nzg3IDQuNDY2OThDMTYuNDc4NyAzLjU4MTcgMTUuNzU0NCAyLjg1NzQyIDE0Ljg2OTEgMi44NTc0MkgxMi44ODhDMTIuMDAyNyAyLjg1NzQyIDExLjI3ODQgMy41ODE3IDExLjI3ODQgNC40NjY5OEMxMS4yNzgzIDUuMzUyMjYgMTIuMDAyNyA2LjA3NjU1IDEyLjg4OCA2LjA3NjU1WiIgZmlsbD0iIzVBNUE1QSIvPgo8cGF0aCBkPSJNMTMuMTI0OSA0LjQ2Njc5QzEzLjEyNDkgMy41ODE1MSAxMy44NDkyIDIuODU3MTIgMTQuNzM0NiAyLjg1NzEySDEyLjg4OEMxMi4wMDI3IDIuODU3MTIgMTEuMjc4NCAzLjU4MTUxIDExLjI3ODQgNC40NjY3OUMxMS4yNzg0IDUuMzUyMDcgMTIuMDAyNyA2LjA3NjQ2IDEyLjg4OCA2LjA3NjQ2SDE0LjczNDZDMTMuODQ5MyA2LjA3NjQ2IDEzLjEyNDkgNS4zNTIxOCAxMy4xMjQ5IDQuNDY2NzlaIiBmaWxsPSIjNDQ0NDQ0Ii8+CjxwYXRoIGQ9Ik00Ni4wMzYyIDIyLjcxMkM0Ni4yNTYgMjIuNTg1NSA0Ni41MSAyMi41MTIgNDYuNzgxNCAyMi41MTJINDguMjMyN0M0OC4zOTM3IDIyLjExMzQgNDguNDIzNyAyMS42MTAyIDQ4LjI4MjggMjEuMTAwNEM0OC4wMDY0IDIwLjEwMDggNDcuMTgwNCAxOS40NTY5IDQ2LjQzNzggMTkuNjYyMkM0NS42OTUzIDE5Ljg2NzUgNDUuMzE3MyAyMC44NDQyIDQ1LjU5MzcgMjEuODQzOUM0NS42ODY2IDIyLjE4MDMgNDUuODQyOCAyMi40NzUgNDYuMDM2MiAyMi43MTJaIiBmaWxsPSIjRDhFQ0ZFIi8+CjxwYXRoIGQ9Ik01MC44NjA5IDIwLjM1MThDNTAuMzE2MSAxOS44MDcgNDkuMjggMTkuOTU5OSA0OC41NDY3IDIwLjY5MzNDNDcuOTk4OSAyMS4yNDEgNDcuNzc1NCAyMS45NTc1IDQ3LjkyNDEgMjIuNTEyMkg0OC43NjI0QzQ5LjI0MzMgMjIuNTEyMiA0OS42NzExIDIyLjc0MDUgNDkuOTQ1OCAyMy4wOTM2QzUwLjE0NzIgMjIuOTg1OSA1MC4zNDIzIDIyLjg0MzQgNTAuNTE5NiAyMi42NjYxQzUxLjI1MjggMjEuOTMyNyA1MS40MDU3IDIwLjg5NjUgNTAuODYwOSAyMC4zNTE4WiIgZmlsbD0iI0M0RTJGRiIvPgo8cGF0aCBkPSJNNDguNzYyNSAyNS42MjJINDYuNzgxNEM0NS44OTYyIDI1LjYyMiA0NS4xNzE5IDI0Ljg5NzcgNDUuMTcxOSAyNC4wMTI1QzQ1LjE3MTkgMjMuMTI3MiA0NS44OTYyIDIyLjQwMjkgNDYuNzgxNCAyMi40MDI5SDQ4Ljc2MjVDNDkuNjQ3OCAyMi40MDI5IDUwLjM3MjEgMjMuMTI3MiA1MC4zNzIxIDI0LjAxMjVDNTAuMzcyMSAyNC44OTc2IDQ5LjY0NzggMjUuNjIyIDQ4Ljc2MjUgMjUuNjIyWiIgZmlsbD0iIzVBNUE1QSIvPgo8cGF0aCBkPSJNNDcuMDMxMSAyNC4wMTIzQzQ3LjAzMTEgMjMuMTI3IDQ3Ljc1NTQgMjIuNDAyNiA0OC42NDA4IDIyLjQwMjZINDYuNzgxNEM0NS44OTYxIDIyLjQwMjYgNDUuMTcxOCAyMy4xMjY5IDQ1LjE3MTggMjQuMDEyM0M0NS4xNzE4IDI0Ljg5NzYgNDUuODk2IDI1LjYyMTkgNDYuNzgxNCAyNS42MjE5SDQ4LjY0MDhDNDcuNzU1NSAyNS42MjIgNDcuMDMxMSAyNC44OTc2IDQ3LjAzMTEgMjQuMDEyM1oiIGZpbGw9IiM0NDQ0NDQiLz4KPHBhdGggZD0iTTU1LjYzMDMgMjYuMTgzM0M1NS4yNTE5IDI1LjkzNDYgNTQuNzQzMiAyNi4wMzk2IDU0LjQ5NDIgMjYuNDE4MUw1MC43OTM0IDMyLjA0NzVINDEuNjYyNVY0MC45MzUySDQ0LjcxMTdDNDQuOTg5IDQwLjkzNTIgNDUuMjE0NiA0MS4xNjA4IDQ1LjIxNDYgNDEuNDM4VjQ4LjQ1OTFINTIuMDU2MVYzMy4xMTMyTDU1Ljg2NSAyNy4zMTk0QzU2LjExMzkgMjYuOTQwNyA1Ni4wMDg4IDI2LjQzMjEgNTUuNjMwMyAyNi4xODMzWiIgZmlsbD0iI0ZGRTVDMiIvPgo8cGF0aCBkPSJNNDQuMzUzOSA0MC44MjU3VjMyLjg2NzdDNDQuMzUzOSAzMi40MTQ2IDQ0LjcyMSAzMi4wNDc0IDQ1LjE3NDIgMzIuMDQ3NEg0MS42NjI1VjQwLjgyNTdINDQuMzUzOVoiIGZpbGw9IiNGRUQyQTQiLz4KPHBhdGggZD0iTTMyLjk0NTQgNDguNDU5VjQxLjQzNzlDMzIuOTQ1NCA0MS4xNjA2IDMzLjE3MSA0MC45MzUxIDMzLjQ0ODIgNDAuOTM1MUg0MS43NzE5VjE4Ljc4OTlMNDQuNTc3MiA5LjcyNjAzQzQ0LjcxMTIgOS4yOTMyMyA0NC40Njg5IDguODMzODYgNDQuMDM2MSA4LjY5OTg3QzQzLjYwMjggOC41NjU4OSA0My4xNDM4IDguODA4MTUgNDMuMDA5OSA5LjI0MDk1TDQwLjM0NjggMTcuODQ1NUgxNS45Njg0TDEzLjMwNTQgOS4yNDA5NUMxMy4xNzE0IDguODA4MTUgMTIuNzExOCA4LjU2NTg5IDEyLjI3OTEgOC42OTk4N0MxMS44NDYzIDguODMzODYgMTEuNjA0IDkuMjkzMjMgMTEuNzM4IDkuNzI2MDNMMTQuNTQzMyAxOC43ODk5VjQ4LjQ1OUgzMi45NDU0WiIgZmlsbD0iI0ZGQjM5MiIvPgo8cGF0aCBkPSJNMTQuNTQzMyAxOC43ODk5VjI2LjY3NDhIMTYuOTk5QzE3LjI1MTUgMjYuNjc0OCAxNy40MDk0IDI2Ljk0ODIgMTcuMjgzMSAyNy4xNjdMMTUuMzg3OCAzMC40NDk4QzE2Ljc0MTkgMzAuNDYwMyAxOC4wMjc0IDMwLjgzMDkgMTkuMTM5IDMxLjQ4MjJWMTcuODQ1NUgxNS45Njg0TDEzLjMwNTQgOS4yNDA5NUMxMy4xNzE0IDguODA4MTUgMTIuNzExOCA4LjU2NTg5IDEyLjI3OTEgOC42OTk4N0MxMS44NDYzIDguODMzODYgMTEuNjA0IDkuMjkzMjMgMTEuNzM4IDkuNzI2MDNMMTQuNTQzMyAxOC43ODk5WiIgZmlsbD0iI0ZGQTM4MSIvPgo8cGF0aCBkPSJNMTMuNTA2NCAzMC41NTc5QzEzLjUwNzkgMzAuNTU3OSAxMy41MDkzIDMwLjU1NzggMTMuNTEwOCAzMC41NTc4SDE1LjMyNTNMMTcuMjgzMSAyNy4xNjY5QzE3LjQwOTQgMjYuOTQ4MSAxNy4yNTE1IDI2LjY3NDcgMTYuOTk4OSAyNi42NzQ3SDExLjgzMjdDMTEuNTgwMiAyNi42NzQ3IDExLjQyMjIgMjYuOTQ4MSAxMS41NDg1IDI3LjE2NjlMMTMuNTA2NCAzMC41NTc5WiIgZmlsbD0iIzgzODM4MyIvPgo8cGF0aCBkPSJNMTMuNTA2MyAzMC41NTc5QzEzLjUwNzggMzAuNTU3OSAxMy41MDkzIDMwLjU1NzggMTMuNTEwOCAzMC41NTc4SDE1LjMyNTNMMTUuNTQxIDMwLjE4NDJMMTMuNzk5IDI3LjE2NjlDMTMuNjcyNyAyNi45NDgxIDEzLjgzMDYgMjYuNjc0NyAxNC4wODMyIDI2LjY3NDdIMTEuODMyN0MxMS41OCAyNi42NzQ3IDExLjQyMjIgMjYuOTQ4MSAxMS41NDg1IDI3LjE2NjlMMTMuNTA2MyAzMC41NTc5WiIgZmlsbD0iIzVBNUE1QSIvPgo8cGF0aCBkPSJNNC40NjU4NCA0OC40NTlIMTguNzQxNEwxOC41ODIyIDQ4LjI3NzVDMTguMDczNSA0Ny42OTczIDE3Ljg4OTEgNDYuOTA3MSAxOC4wODkgNDYuMTYzN0wyMC4zMzM2IDM3LjgxNzdDMjAuNjUzOCAzNi42Mjc2IDIxLjI5OTUgMzUuNTkxIDIyLjE1NzkgMzQuNzkxNUMyMC45MzQ3IDMyLjE3NzIgMTguMjkyMiAzMC40NDg1IDE1LjMyODggMzAuNDQ4NUgxMy41MTA4QzEwLjEwMDEgMzAuNDQ4NSA3LjExMzkyIDMyLjczNzcgNi4yMjgxIDM2LjAzMTRMMy42MzY2NyA0NS42NjY0QzMuMzQ5NTYgNDYuNzM0IDMuNzIyNTMgNDcuNzkgNC40NjU4NCA0OC40NTlaIiBmaWxsPSIjNUE1QTVBIi8+CjxwYXRoIGQ9Ik00LjQ2NTg1IDQ4LjQ1OUg4LjE2MTE5QzcuNDE3ODggNDcuNzg5OSA3LjA0NDggNDYuNzM0IDcuMzMyMDIgNDUuNjY2NEw5LjkyMzQ0IDM2LjAzMTNDMTAuNzI2OSAzMy4wNDM3IDEzLjI1ODYgMzAuODgyOCAxNi4yNjc1IDMwLjUwNjhDMTUuOTU5MSAzMC40NjgzIDE1LjY0NTcgMzAuNDQ4NCAxNS4zMjg2IDMwLjQ0ODRIMTMuNTEwN0MxMC4xIDMwLjQ0ODQgNy4xMTM4MSAzMi43Mzc1IDYuMjI3OTkgMzYuMDMxM0wzLjYzNjY3IDQ1LjY2NjRDMy4zNDk1NiA0Ni43MzQgMy43MjI1MyA0Ny43ODk5IDQuNDY1ODUgNDguNDU5WiIgZmlsbD0iIzQ0NDQ0NCIvPgo8cGF0aCBkPSJNMjYuNTQwOSAzMy4wNjI3SDI4LjA5OTZMMjkuNzY1OSAzMC4xNzY4QzI5Ljg5MjIgMjkuOTU4IDI5LjczNDIgMjkuNjg0NiAyOS40ODE3IDI5LjY4NDZIMjUuMTU4OUMyNC45MDYzIDI5LjY4NDYgMjQuNzQ4NCAyOS45NTggMjQuODc0NyAzMC4xNzY4TDI2LjU0MDkgMzMuMDYyN1oiIGZpbGw9IiM4MzgzODMiLz4KPHBhdGggZD0iTTI2LjU0MDkgMzMuMDYyN0gyOC4wOTk2TDI4LjMyOTEgMzIuNjY1M0wyNi44OTIzIDMwLjE3NjhDMjYuNzY2IDI5Ljk1OCAyNi45MjM5IDI5LjY4NDYgMjcuMTc2NSAyOS42ODQ2SDI1LjE1ODhDMjQuOTA2MiAyOS42ODQ2IDI0Ljc0ODMgMjkuOTU4IDI0Ljg3NDcgMzAuMTc2OEwyNi41NDA5IDMzLjA2MjdaIiBmaWxsPSIjNUE1QTVBIi8+CjxwYXRoIGQ9Ik0zMi45NDU0IDQ4LjQ1OVY0MS40Mzc5QzMyLjk0NTQgNDEuMTYwNiAzMy4xNzEgNDAuOTM1MSAzMy40NDgyIDQwLjkzNTFIMzUuMjcwMUwzNC40MTczIDM3Ljc4MDhDMzMuNjQ3IDM0LjkzMTkgMzEuMDYyMyAzMi45NTMzIDI4LjExMTEgMzIuOTUzM0gyNi41MzY1QzIzLjU4MjEgMzIuOTUzMyAyMC45OTU0IDM0LjkzNjIgMjAuMjI4MiAzNy43ODkyTDE3Ljk4MzUgNDYuMTM1MkMxNy43NDggNDcuMDEwOCAxOC4wMjUxIDQ3Ljg3NzMgMTguNjAxOSA0OC40NTlIMzIuOTQ1NFoiIGZpbGw9IiM1QTVBNUEiLz4KPHBhdGggZD0iTTE4LjYwMTcgNDguNDU5SDIyLjI0OTJDMjEuNjcyNSA0Ny44NzczIDIxLjM5NTMgNDcuMDEwOCAyMS42MzA4IDQ2LjEzNTJMMjMuODc1NSAzNy43ODkyQzI0LjU1MTUgMzUuMjc1NyAyNi42Mzk4IDMzLjQzODQgMjkuMTQ3NCAzMy4wMzY1QzI4LjgwODcgMzIuOTgyMyAyOC40NjI2IDMyLjk1MzMgMjguMTExIDMyLjk1MzNIMjYuNTM2M0MyMy41ODIgMzIuOTUzMyAyMC45OTUzIDM0LjkzNjIgMjAuMjI4IDM3Ljc4OTJMMTcuOTgzMyA0Ni4xMzUyQzE3Ljc0NzggNDcuMDEwOCAxOC4wMjUxIDQ3Ljg3NzMgMTguNjAxNyA0OC40NTlaIiBmaWxsPSIjNDQ0NDQ0Ii8+CjxwYXRoIGQ9Ik00NS4zMjM5IDQ4LjQ1OVY0MS40Mzc5QzQ1LjMyMzkgNDEuMDk5OCA0NS4wNDk4IDQwLjgyNTcgNDQuNzExNyA0MC44MjU3SDMzLjQ0OEMzMy4xMSA0MC44MjU3IDMyLjgzNTkgNDEuMDk5OCAzMi44MzU5IDQxLjQzNzlWNDguNDU5SDQ1LjMyMzlaIiBmaWxsPSIjRkQ0NzU1Ii8+CjxwYXRoIGQ9Ik0zNi4wNzQ1IDQ4LjQ1OVY0MS40Mzc5QzM2LjA3NDUgNDEuMDk5OCAzNi4zNDg2IDQwLjgyNTcgMzYuNjg2NyA0MC44MjU3SDMzLjQ0ODJDMzMuMTEwMSA0MC44MjU3IDMyLjgzNiA0MS4wOTk4IDMyLjgzNiA0MS40Mzc5VjQ4LjQ1OUgzNi4wNzQ1WiIgZmlsbD0iI0ZCMkIzQSIvPgo8cGF0aCBkPSJNNTMuMjIwNyA0OS45OTAzSDEuNTU0NzVDMS4xMDE2MSA0OS45OTAzIDAuNzM0NDM2IDQ5LjYyMyAwLjczNDQzNiA0OS4xN0MwLjczNDQzNiA0OC43MTcgMS4xMDE2MSA0OC4zNDk3IDEuNTU0NzUgNDguMzQ5N0g1My4yMjA3QzUzLjY3MzggNDguMzQ5NyA1NC4wNDEgNDguNzE3IDU0LjA0MSA0OS4xN0M1NC4wNDEgNDkuNjIzIDUzLjY3MzggNDkuOTkwMyA1My4yMjA3IDQ5Ljk5MDNaIiBmaWxsPSIjODM4MzgzIi8+CjxwYXRoIGQ9Ik0xMC42MTQ4IDIyLjc4NDRDMTAuMTYxNyAyMi43ODQ0IDkuNzk0NTMgMjIuNDE3MiA5Ljc5NDUzIDIxLjk2NDFWMjEuNTI2NkM5Ljc5NDUzIDIxLjA3MzYgMTAuMTYxNyAyMC43MDYzIDEwLjYxNDggMjAuNzA2M0MxMS4wNjggMjAuNzA2MyAxMS40MzUyIDIxLjA3MzYgMTEuNDM1MiAyMS41MjY2VjIxLjk2NDFDMTEuNDM1MiAyMi40MTcyIDExLjA2NzkgMjIuNzg0NCAxMC42MTQ4IDIyLjc4NDRaTTEwLjYxNDggMTkuNjEyNkMxMC4xNjE3IDE5LjYxMjYgOS43OTQ1MyAxOS4yNDUzIDkuNzk0NTMgMTguNzkyMlYxOC4zNTQ3QzkuNzk0NTMgMTcuOTAxNyAxMC4xNjE3IDE3LjUzNDQgMTAuNjE0OCAxNy41MzQ0QzExLjA2OCAxNy41MzQ0IDExLjQzNTIgMTcuOTAxNyAxMS40MzUyIDE4LjM1NDdWMTguNzkyMkMxMS40MzUyIDE5LjI0NTMgMTEuMDY3OSAxOS42MTI2IDEwLjYxNDggMTkuNjEyNlpNMTAuMTgxMiAxNi41MTA0QzkuODgyOTEgMTYuNTEwNCA5LjU5NTM2IDE2LjM0NzIgOS40NTAxMSAxNi4wNjMzQzkuMzk3ODMgMTUuOTYxMiA5LjMzOTA5IDE1Ljg2MDYgOS4yNzU2NiAxNS43NjQ0QzkuMDI2MDYgMTUuMzg2MyA5LjEzMDE5IDE0Ljg3NzUgOS41MDgzIDE0LjYyNzlDOS44ODYwOCAxNC4zNzgyIDEwLjM5NTEgMTQuNDgyMyAxMC42NDQ4IDE0Ljg2MDRDMTAuNzQxNiAxNS4wMDcxIDEwLjgzMTIgMTUuMTYwNCAxMC45MTA5IDE1LjMxNjRDMTEuMTE3MiAxNS43MTk4IDEwLjk1NzQgMTYuMjEzOSAxMC41NTM5IDE2LjQyMDJDMTAuNDM0NCAxNi40ODE0IDEwLjMwNjggMTYuNTEwNCAxMC4xODEyIDE2LjUxMDRaTTcuODE4MzQgMTQuNTIxNkM3LjczODE3IDE0LjUyMTYgNy42NTY1OCAxNC41MDk4IDcuNTc1NzUgMTQuNDg0N0M3LjQ2NTM5IDE0LjQ1MDYgNy4zNTIxOSAxNC40MjI0IDcuMjM5MiAxNC40MDA2QzYuNzk0MzcgMTQuMzE1MiA2LjUwMyAxMy44ODUyIDYuNTg4NDIgMTMuNDQwM0M2LjY3Mzg0IDEyLjk5NTQgNy4xMDI0OCAxMi43MDQgNy41NDg3MyAxMi43ODk0QzcuNzIwNjcgMTIuODIyNCA3Ljg5MjgzIDEyLjg2NTQgOC4wNjA1IDEyLjkxNzNDOC40OTMzIDEzLjA1MTIgOC43MzU2NyAxMy41MTA1IDguNjAxOCAxMy45NDMzQzguNDkyOTcgMTQuMjk1NSA4LjE2ODY3IDE0LjUyMTYgNy44MTgzNCAxNC41MjE2Wk00LjY2NzkxIDE0LjMwMTFDNC42MzAyOCAxNC4zMDExIDQuNTkyMzMgMTQuMjk4NSA0LjU1Mzk0IDE0LjI5MzJDNC4zODMzMSAxNC4yNjk1IDQuMjEyMDMgMTQuMjM3IDQuMDQ0NjkgMTQuMTk2NkMzLjYwNDM0IDE0LjA5MDMgMy4zMzM1MyAxMy42NDcxIDMuNDM5OTUgMTMuMjA2N0MzLjU0NjI3IDEyLjc2NjMgMy45ODk0NSAxMi40OTU0IDQuNDI5OTEgMTIuNjAxOEM0LjU0NDg2IDEyLjYyOTYgNC42NjI2NiAxMi42NTE5IDQuNzc5OCAxMi42NjgyQzUuMjI4NTYgMTIuNzMwNiA1LjU0MTgxIDEzLjE0NDkgNS40NzkzNiAxMy41OTM2QzUuNDIyMjcgMTQuMDAzOSA1LjA3MDczIDE0LjMwMTEgNC42Njc5MSAxNC4zMDExWk0xLjkzNDE5IDEyLjgyNzJDMS43MDY1OCAxMi44MjcyIDEuNDgwMTcgMTIuNzMzIDEuMzE3OTcgMTIuNTQ4N0MxLjIwNDMzIDEyLjQxOTUgMS4wOTU5NCAxMi4yODM2IDAuOTk1NzUgMTIuMTQ0NEMwLjczMDg0NCAxMS43NzY4IDAuODE0MTg4IDExLjI2NDIgMS4xODE4IDEwLjk5OTRDMS41NDkzIDEwLjczNDYgMi4wNjE5NCAxMC44MTc4IDIuMzI2ODQgMTEuMTg1NEMyLjM5NjA4IDExLjI4MTYgMi40NzEgMTEuMzc1NiAyLjU0OTc1IDExLjQ2NUMyLjg0OSAxMS44MDUyIDIuODE1OTcgMTIuMzIzNSAyLjQ3NTcgMTIuNjIyN0MyLjMxOTg0IDEyLjc1OTggMi4xMjY1OCAxMi44MjcyIDEuOTM0MTkgMTIuODI3MlpNMC44MjA0MjIgOS45MjkwNEMwLjM3MTg3NSA5LjkyOTA0IDAuMDA1Nzk2ODcgOS41NjgyMSAwLjAwMDQzNzUgOS4xMTg0NkwwIDkuMDU0OTJDMC4wMDAxMDkzNzUgOC45MDM0MyAwLjAwNjU2MjUgOC43NTE1MSAwLjAxOTE0MDYgOC42MDI2NUMwLjA1NzQyMTkgOC4xNTEyNiAwLjQ1NSA3LjgxNTA0IDAuOTA1NjI1IDcuODU0NDJDMS4zNTcxMiA3Ljg5MjU5IDEuNjkyMDMgOC4yODk1MSAxLjY1Mzk3IDguNzQwOUMxLjY0NTIyIDguODQ0MzcgMS42NDA3MyA4Ljk1MDI0IDEuNjQwNjIgOS4wNTU1N0wxLjY0MDg0IDkuMDk4ODhDMS42NDYzMSA5LjU1MTkyIDEuMjgzNDEgOS45MjM1NyAwLjgzMDQ4NCA5LjkyODkzQzAuODI3MjAzIDkuOTI5MDQgMC44MjM3MDMgOS45MjkwNCAwLjgyMDQyMiA5LjkyOTA0Wk0xLjg2MzMxIDcuMDA1MDFDMS42Nzc0OCA3LjAwNTAxIDEuNDkwNDUgNi45NDIxMiAxLjMzNjg5IDYuODEzNDlDMC45ODk2MjUgNi41MjI0NSAwLjk0NDAxNiA2LjAwNTEgMS4yMzUwNiA1LjY1Nzg0QzEuMzQ1NDIgNS41MjYxNSAxLjQ2MzY2IDUuMzk4MjkgMS41ODY1OSA1LjI3Nzg3QzEuOTA5OTEgNC45NjA3OSAyLjQyOTMzIDQuOTY1ODIgMi43NDY1MiA1LjI4OTU3QzMuMDYzNTkgNS42MTMxIDMuMDU4NDUgNi4xMzI1MyAyLjczNDgxIDYuNDQ5NkMyLjY1MDE2IDYuNTMyNjIgMi41Njg1NiA2LjYyMDc4IDIuNDkyNDQgNi43MTE2N0MyLjMzMDIzIDYuOTA1MjYgMi4wOTc1OSA3LjAwNTAxIDEuODYzMzEgNy4wMDUwMVpNNC41NTkzIDUuNDY1NzhDNC4xNjQ0NSA1LjQ2NTc4IDMuODE2NTMgNS4xODAwOSAzLjc1MDY5IDQuNzc3N0MzLjY3NzUyIDQuMzMwNTcgMy45ODA3IDMuOTA4OTMgNC40Mjc3MiAzLjgzNTc2QzQuNTk3MzYgMy44MDgwOSA0Ljc3MDA2IDMuNzg4MjkgNC45NDEyMyAzLjc3NzEzQzUuMzkzMjggMy43NDczOCA1Ljc4MzY0IDQuMDkwMzggNS44MTMxNyA0LjU0MjQzQzUuODQyNTkgNC45OTQ0OCA1LjQ5OTkyIDUuMzg0OTUgNS4wNDc4NyA1LjQxNDM3QzQuOTI5NDIgNS40MjIwMyA0LjgwOTg4IDUuNDM1NyA0LjY5MjYzIDUuNDU0OTVDNC42NDc3OCA1LjQ2MjE3IDQuNjAzMTYgNS40NjU3OCA0LjU1OTMgNS40NjU3OFpNOC4xNjYxNiA1LjQwNjQ5SDcuNzI4NjZDNy4yNzU1MiA1LjQwNjQ5IDYuOTA4MzQgNS4wMzkyMSA2LjkwODM0IDQuNTg2MThDNi45MDgzNCA0LjEzMzE1IDcuMjc1NTIgMy43NjU4NyA3LjcyODY2IDMuNzY1ODdIOC4xNjYxNkM4LjYxOTMgMy43NjU4NyA4Ljk4NjQ3IDQuMTMzMTUgOC45ODY0NyA0LjU4NjE4QzguOTg2NDcgNS4wMzkyMSA4LjYxOTMgNS40MDY0OSA4LjE2NjE2IDUuNDA2NDlaIiBmaWxsPSIjQzRFMkZGIi8+Cjwvc3ZnPgo="
  },
  {
    id: 2,
    title: "Натуральные продукты",
    type: "Фермерские продукты",
    isNegative: false,
    about:
      "Поставляем местные органические продукты выращенные без пестицидов и&nbsp;химических удобрений.",
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMwLjk0MzggMjMuMTE0MkMzMC41MjEzIDIzLjU2MDEgMjkuOTI0IDIzLjc5NSAyOS4zMDk2IDIzLjc1N0MyOS4wOTcxIDIzLjc0MzUgMjQuMDQ1NSAyMy4zOTYzIDE4Ljg3ODYgMjAuNjEyQzEzLjk5NiAxNy45ODA5IDguMTA0MDIgMTIuNjQyMSA3Ljc2MTg5IDIuMTQ5MTFDNy43NDMwOCAxLjU3Njg2IDcuOTYyMTYgMS4wMjI1NCA4LjM2Njg0IDAuNjE3NjM5QzguOTg0MTYgMCA5LjcwODY1IDAgMTAuMDE4MSAwQzEwLjAxODIgMCAxMC4wMTgyIDAgMTAuMDE4MiAwQzEwLjIzNyAwIDE1LjM4MjUgMC4wMzY5Njg2IDIwLjY4NDIgMy4yMTU5NUMyMy40MzY0IDQuODY2MyAyNS43MjQ1IDcuMDYwMjUgMjcuNDg1MiA5LjczNzA5QzI5LjYxMjIgMTIuOTcwOSAzMC45NjE4IDE2LjkxMDkgMzEuNDk2OSAyMS40NDc0QzMxLjU2ODkgMjIuMDU3NyAzMS4zNjYyIDIyLjY2ODEgMzAuOTQzOCAyMy4xMTQyWiIgZmlsbD0iIzZEQzgyQSIvPgo8cGF0aCBkPSJNMjcuNTUwMSA5LjgzOTY2QzI2LjY4MTggMTEuNDQyIDI1Ljk0OTYgMTMuMjQ2NyAyNS40MjQxIDE1LjI3OTdDMjQuOTUxNiAxNi42OTA5IDI0LjIzMDEgMTkuMTcwMiAyMy42MzQ2IDIyLjYwMDVDMjYuNzc1NyAyMy41ODM2IDI5LjE2NDkgMjMuNzQ3OSAyOS4zMDk2IDIzLjc1N0MyOS45MjQgMjMuNzk1MSAzMC41MjEyIDIzLjU2MDIgMzAuOTQzOCAyMy4xMTQyQzMxLjM2NjIgMjIuNjY4MSAzMS41Njg4IDIyLjA1NzcgMzEuNDk2OCAyMS40NDc2QzMwLjk2NzMgMTYuOTU4MyAyOS42Mzg3IDEzLjA1NDMgMjcuNTUwMSA5LjgzOTY2WiIgZmlsbD0iIzVFQUMyNCIvPgo8cGF0aCBkPSJNMjkuMTY3NCAxOS41NjIyTDI0LjcwNjIgMTUuMjExOEwyMy41Mjk4IDkuMzQ5NTdDMjMuNDM2NyA4Ljg4NDk0IDIyLjk4NDcgOC41ODQyNyAyMi41MiA4LjY3NzI0QzIyLjA1NTMgOC43NzA0MyAyMS43NTQ1IDkuMjIyNjkgMjEuODQ3NiA5LjY4NzFMMjIuNTMwNyAxMy4wOTA0TDIwLjA3MDMgMTAuNjkxMkwxOC44Nzc3IDQuNzQ4MjhDMTguNzg0NiA0LjI4MzY1IDE4LjMzMjMgMy45ODMzMSAxNy44Njc4IDQuMDc1OTVDMTcuNDAzMiA0LjE2OTE0IDE3LjEwMjQgNC42MjEyOSAxNy4xOTU1IDUuMDg1ODFMMTcuODk0NiA4LjU2OTYxTDEyLjE1MzMgMi45NzEzOEMxMS44MTM4IDIuNjQwNjMgMTEuMjcxMSAyLjY0NzYzIDEwLjk0MDIgMi45ODY2OUMxMC42MDk1IDMuMzI1OTcgMTAuNjE2NCAzLjg2OTAxIDEwLjk1NTUgNC4xOTk2NUwxNy4yNjg1IDEwLjM1NTdMMTIuODY0NyAxMC4yODA1QzEyLjM5MTQgMTAuMjY3NSAxMi4wMDA1IDEwLjY0OTggMTEuOTkyMyAxMS4xMjM1QzExLjk4NDMgMTEuNTk3MiAxMi4zNjE3IDExLjk4NzcgMTIuODM1NCAxMS45OTU5TDE5LjA1OTYgMTIuMTAyM0wyMS45ODgxIDE0Ljk1ODFMMTcuNTE2OCAxNC44ODE5QzE3LjA0NzQgMTQuODcxNCAxNi42NTI3IDE1LjI1MTIgMTYuNjQ0NCAxNS43MjQ5QzE2LjYzNjUgMTYuMTk4NiAxNy4wMTM4IDE2LjU4OTEgMTcuNDg3NSAxNi41OTczTDIzLjc3OSAxNi43MDQ3TDI3Ljk2OTIgMjAuNzkwN0MyOC4xMzYxIDIwLjk1MzQgMjguMzUyMSAyMS4wMzQzIDI4LjU2NzkgMjEuMDM0M0MyOC43OTExIDIxLjAzNDMgMjkuMDE0IDIwLjk0NzcgMjkuMTgyMyAyMC43NzUzQzI5LjUxMzQgMjAuNDM1OSAyOS41MDY2IDE5Ljg5MjkgMjkuMTY3NCAxOS41NjIyWiIgZmlsbD0iIzRFOTAxRSIvPgo8cGF0aCBkPSJNNTEuMTY4MSAwLjY0Njc5N0M1MC43NDU2IDAuMjAwODc2IDUwLjE0ODMgLTAuMDM0MDYxMSA0OS41MzQgMC4wMDQwMDEzNUM0OS4zMjE1IDAuMDE3NDU0NCA0NC4yNjk5IDAuMzY0NzIgMzkuMTAzIDMuMTQ4OTZDMzUuMTMyNiA1LjI4ODQ0IDMwLjQ5NTEgOS4yMTg1IDI4LjcxNjcgMTYuMjU0MUMyNy43NDUzIDE5LjExNDYgMjUuNjA1NCAyNi44NzIgMjYuMTA1OSAzOC41NTIyQzI2LjE0OTIgMzkuNTYyNyAyNi45ODIgNDAuMzUyOCAyNy45ODM5IDQwLjM1MjdDMjguMDExIDQwLjM1MjcgMjguMDM4MyA0MC4zNTIxIDI4LjA2NTggNDAuMzUwOUMyOS4xMDM3IDQwLjMwNjQgMjkuOTA5IDM5LjQyOTEgMjkuODY0NiAzOC4zOTExQzI5LjYwNTIgMzIuMzQwMSAzMC4xMDM0IDI3LjM5MzQgMzAuNzQ1NSAyMy43NDMzQzMyLjE5MDIgMjMuNjYwNSAzNi40OTQ5IDIzLjE5MTUgNDAuOTA4NiAyMC41NDVDNDMuNjYwOCAxOC44OTQ3IDQ1Ljk0ODkgMTYuNzAwNyA0Ny43MDk2IDE0LjAyMzlDNDkuODM2NSAxMC43OTAxIDUxLjE4NjIgNi44NTAxIDUxLjcyMTMgMi4zMTM1NkM1MS43OTMyIDEuNzAzMjUgNTEuNTkwNiAxLjA5MjgzIDUxLjE2ODEgMC42NDY3OTdaIiBmaWxsPSIjOTFEQzVBIi8+CjxwYXRoIGQ9Ik00OC40NjcxIDIuOTg2NzNDNDguMTM2MiAyLjY0NzU2IDQ3LjU5MzEgMi42NDA2NyA0Ny4yNTQgMi45NzE0Mkw0MS41MTMyIDguNTY5NTVMNDIuMjEyMyA1LjA4NTg1QzQyLjMwNTQgNC42MjEzNCA0Mi4wMDQ2IDQuMTY5MjkgNDEuNTQgNC4wNzU5OUM0MS4wNzYgMy45ODMyNCA0MC42MjMzIDQuMjgzNyA0MC41MzAxIDQuNzQ4MzJMMzkuMzM3NCAxMC42OTEyTDM2Ljg3NzEgMTMuMDkwNEwzNy41NjAyIDkuNjg3MTRDMzcuNjUzMyA5LjIyMjYyIDM3LjM1MjUgOC43NzA1OCAzNi44ODc4IDguNjc3MjhDMzYuNDIzNCA4LjU4NDMxIDM1Ljk3MTIgOC44ODQ5OCAzNS44NzggOS4zNDk2MUwzNC43MDE0IDE1LjIxMkwzMC4yNDAxIDE5LjU2MjRDMjkuOTAwOSAxOS44OTMxIDI5Ljg5NDIgMjAuNDM2MiAzMC4yMjQ4IDIwLjc3NTNDMzAuMzkzMSAyMC45NDc3IDMwLjYxNTggMjEuMDM0MiAzMC44MzkyIDIxLjAzNDJDMzEuMDU1MSAyMS4wMzQyIDMxLjI3MTIgMjAuOTUzMyAzMS40Mzc5IDIwLjc5MDZMMzUuNjI4MiAxNi43MDQ2TDQxLjkxOTggMTYuNTk3MkM0Mi4zOTM1IDE2LjU4OTEgNDIuNzcwOSAxNi4xOTg3IDQyLjc2MjkgMTUuNzI0OEM0Mi43NTQ5IDE1LjI1NjEgNDIuMzcyNCAxNC44ODE3IDQxLjkwNTUgMTQuODgxN0M0MS45MDA1IDE0Ljg4MTcgNDEuODk1NSAxNC44ODE3IDQxLjg5MDUgMTQuODgxOEwzNy40MTkyIDE0Ljk1OEw0MC4zNDc3IDEyLjEwMjJMNDYuNTcxOSAxMS45OTU4QzQ3LjA0NTYgMTEuOTg3NyA0Ny40MjI5IDExLjU5NzMgNDcuNDE0OSAxMS4xMjM0QzQ3LjQwNyAxMC42NTQ3IDQ3LjAyNDUgMTAuMjgwMyA0Ni41NTc2IDEwLjI4MDNDNDYuNTUyNSAxMC4yODAzIDQ2LjU0NzUgMTAuMjgwMyA0Ni41NDI2IDEwLjI4MDRMNDIuMTM4NyAxMC4zNTU2TDQ4LjQ1MTcgNC4xOTk1OUM0OC43OTExIDMuODY4OTUgNDguNzk3OSAzLjMyNTkgNDguNDY3MSAyLjk4NjczWiIgZmlsbD0iIzVFQUMyNCIvPgo8cGF0aCBkPSJNNDkuMTMwNCA0NC44NTczQzQ4LjI2NTIgNDQuODU3MyA0Ny40NTcyIDQ1LjEwMSA0Ni43NzA0IDQ1LjUyMzFDNDUuNzU2MSA0Mi4yMDQ0IDQyLjY2OTggMzkuNzkwMyAzOS4wMTkxIDM5Ljc5MDNDMzguNjE0IDM5Ljc5MDMgMzguMjE2MiAzOS44MjA5IDM3LjgyNzIgMzkuODc4M0MzNi4xNzIzIDM2LjA5MjQgMzIuMzk2MiAzMy40NDU3IDI4LjAwMDMgMzMuNDQ1N0MyMy42MDQ0IDMzLjQ0NTcgMTkuODI4MiAzNi4wOTI0IDE4LjE3MzQgMzkuODc4M0MxNy43ODQyIDM5LjgyMDkgMTcuMzg2MyAzOS43OTAzIDE2Ljk4MTQgMzkuNzkwM0MxMy4zMzA3IDM5Ljc5MDMgMTAuMjQ0NiA0Mi4yMDQ0IDkuMjMwMTQgNDUuNTIzMUM4LjU0MzM3IDQ1LjEwMSA3LjczNTQyIDQ0Ljg1NzMgNi44NzAxNiA0NC44NTczQzQuMzc2OTYgNDQuODU3MyAyLjM1NTcxIDQ2Ljg3ODYgMi4zNTU3MSA0OS4zNzE4QzIuMzU1NzEgNTEuODY1IDQuMzc2OTYgNTMuODg2MiA2Ljg3MDE2IDUzLjg4NjJDOC4yMDYyOCA1My44ODYyIDkuNDA2MzQgNTMuMzA1NCAxMC4yMzI4IDUyLjM4M0MxMS42ODU1IDU0LjU2MjkgMTQuMTY1MiA1NiAxNi45ODEzIDU2QzE5LjI2MTkgNTYgMjEuMzIxMyA1NS4wNTY2IDIyLjc5MzkgNTMuNTQwNUMyNC4zMzU4IDU0LjM5ODkgMjYuMTEwMyA1NC44ODk1IDI4LjAwMDMgNTQuODg5NUMyOS44OTAyIDU0Ljg4OTUgMzEuNjY0OCA1NC4zOTg4IDMzLjIwNjYgNTMuNTQwNUMzNC42Nzk1IDU1LjA1NjYgMzYuNzM4NyA1NiAzOS4wMTkyIDU2QzQxLjgzNTMgNTYgNDQuMzE1MiA1NC41NjMxIDQ1Ljc2NzggNTIuMzgzQzQ2LjU5NDMgNTMuMzA1NCA0Ny43OTQ0IDUzLjg4NjIgNDkuMTMwNCA1My44ODYyQzUxLjYyMzYgNTMuODg2MiA1My42NDQ4IDUxLjg2NSA1My42NDQ4IDQ5LjM3MThDNTMuNjQ0OCA0Ni44Nzg1IDUxLjYyMzYgNDQuODU3MyA0OS4xMzA0IDQ0Ljg1NzNaIiBmaWxsPSIjQ0M3NDAwIi8+CjxwYXRoIGQ9Ik0zMy44OTQgMzcuODM0N0MzNC45NjAxIDM3LjgzNDcgMzUuOTg4OSAzNy45OTI1IDM2Ljk2MSAzOC4yODIzQzM1LjA0NDIgMzUuMzY5NiAzMS43NDc2IDMzLjQ0NTYgMjguMDAwMiAzMy40NDU2QzIzLjYwNDIgMzMuNDQ1NiAxOS44MjgxIDM2LjA5MjQgMTguMTczMyAzOS44NzgzQzE3Ljc4NDEgMzkuODIwOSAxNy4zODYyIDM5Ljc5MDIgMTYuOTgxMyAzOS43OTAyQzEzLjMzMDYgMzkuNzkwMiAxMC4yNDQ1IDQyLjIwNDMgOS4yMzAwNSA0NS41MjNDOC41NDMyOCA0NS4xMDA5IDcuNzM1MzMgNDQuODU3MiA2Ljg3MDA3IDQ0Ljg1NzJDNC4zNzY4NyA0NC44NTcyIDIuMzU1NjIgNDYuODc4NSAyLjM1NTYyIDQ5LjM3MTdDMi4zNTU2MiA1MS44NjQ5IDQuMzc2ODcgNTMuODg2MSA2Ljg3MDA3IDUzLjg4NjFDOC4yMDYxOSA1My44ODYxIDkuNDA2MjUgNTMuMzA1MyAxMC4yMzI3IDUyLjM4MjlDMTEuNjg1NCA1NC41NjI4IDE0LjE2NTEgNTUuOTk5OSAxNi45ODEyIDU1Ljk5OTlDMTkuMjYxOCA1NS45OTk5IDIxLjMyMTIgNTUuMDU2NSAyMi43OTM4IDUzLjU0MDRDMjMuNDY2MyA1My45MTQ4IDI0LjE4MjkgNTQuMjE4OSAyNC45MzQgNTQuNDQzM0MyMy44MjE0IDUyLjc1MzMgMjMuMTcyMiA1MC43MzEyIDIzLjE3MjIgNDguNTU2NkMyMy4xNzIyIDQyLjYzNTIgMjcuOTcyNSAzNy44MzQ3IDMzLjg5NCAzNy44MzQ3WiIgZmlsbD0iI0FBNjEwMCIvPgo8cGF0aCBkPSJNMzIuMjY0MSA0Ny45OTJDMzMuMzM3NSA0Ny45OTIgMzQuMjA3NyA0Ny4xMjE4IDM0LjIwNzcgNDYuMDQ4M0MzNC4yMDc3IDQ0Ljk3NDggMzMuMzM3NSA0NC4xMDQ2IDMyLjI2NDEgNDQuMTA0NkMzMS4xOTA2IDQ0LjEwNDYgMzAuMzIwNCA0NC45NzQ4IDMwLjMyMDQgNDYuMDQ4M0MzMC4zMjA0IDQ3LjEyMTggMzEuMTkwNiA0Ny45OTIgMzIuMjY0MSA0Ny45OTJaIiBmaWxsPSIjQUE2MTAwIi8+CjxwYXRoIGQ9Ik00MC4xMDEgNTIuNTY5MkM0MS4xNzQ1IDUyLjU2OTIgNDIuMDQ0NyA1MS42OTkgNDIuMDQ0NyA1MC42MjU1QzQyLjA0NDcgNDkuNTUyIDQxLjE3NDUgNDguNjgxOCA0MC4xMDEgNDguNjgxOEMzOS4wMjc1IDQ4LjY4MTggMzguMTU3MyA0OS41NTIgMzguMTU3MyA1MC42MjU1QzM4LjE1NzMgNTEuNjk5IDM5LjAyNzUgNTIuNTY5MiA0MC4xMDEgNTIuNTY5MloiIGZpbGw9IiNBQTYxMDAiLz4KPHBhdGggZD0iTTM4LjkwNTcgNDQuNzIyNkMzOS4zMTg4IDQ0LjcyMjYgMzkuNjUzNiA0NC4zODc3IDM5LjY1MzYgNDMuOTc0NkMzOS42NTM2IDQzLjU2MTYgMzkuMzE4OCA0My4yMjY3IDM4LjkwNTcgNDMuMjI2N0MzOC40OTI3IDQzLjIyNjcgMzguMTU3OCA0My41NjE2IDM4LjE1NzggNDMuOTc0NkMzOC4xNTc4IDQ0LjM4NzcgMzguNDkyNyA0NC43MjI2IDM4LjkwNTcgNDQuNzIyNloiIGZpbGw9IiNBQTYxMDAiLz4KPHBhdGggZD0iTTI4LjAwMDIgNTIuMTIxNUMyOC40MTMyIDUyLjEyMTUgMjguNzQ4MSA1MS43ODY2IDI4Ljc0ODEgNTEuMzczNkMyOC43NDgxIDUwLjk2MDUgMjguNDEzMiA1MC42MjU3IDI4LjAwMDIgNTAuNjI1N0MyNy41ODcxIDUwLjYyNTcgMjcuMjUyMyA1MC45NjA1IDI3LjI1MjMgNTEuMzczNkMyNy4yNTIzIDUxLjc4NjYgMjcuNTg3MSA1Mi4xMjE1IDI4LjAwMDIgNTIuMTIxNVoiIGZpbGw9IiNBQTYxMDAiLz4KPHBhdGggZD0iTTMwLjMxOTcgNDEuOTI3M0MzMC43MzI3IDQxLjkyNzMgMzEuMDY3NiA0MS41OTI0IDMxLjA2NzYgNDEuMTc5NEMzMS4wNjc2IDQwLjc2NjMgMzAuNzMyNyA0MC40MzE1IDMwLjMxOTcgNDAuNDMxNUMyOS45MDY2IDQwLjQzMTUgMjkuNTcxOCA0MC43NjYzIDI5LjU3MTggNDEuMTc5NEMyOS41NzE4IDQxLjU5MjQgMjkuOTA2NiA0MS45MjczIDMwLjMxOTcgNDEuOTI3M1oiIGZpbGw9IiNBQTYxMDAiLz4KPHBhdGggZD0iTTQ2LjQxMzMgNDguNzQwNkM0Ni44MjY0IDQ4Ljc0MDYgNDcuMTYxMiA0OC40MDU4IDQ3LjE2MTIgNDcuOTkyN0M0Ny4xNjEyIDQ3LjU3OTcgNDYuODI2NCA0Ny4yNDQ4IDQ2LjQxMzMgNDcuMjQ0OEM0Ni4wMDAzIDQ3LjI0NDggNDUuNjY1NCA0Ny41Nzk3IDQ1LjY2NTQgNDcuOTkyN0M0NS42NjU0IDQ4LjQwNTggNDYuMDAwMyA0OC43NDA2IDQ2LjQxMzMgNDguNzQwNloiIGZpbGw9IiNBQTYxMDAiLz4KPHBhdGggZD0iTTQyLjA0NTMgMzYuNjM5MUM0My4xMTg4IDM2LjYzOTEgNDMuOTg5IDM1Ljc2ODkgNDMuOTg5IDM0LjY5NTRDNDMuOTg5IDMzLjYyMTkgNDMuMTE4OCAzMi43NTE3IDQyLjA0NTMgMzIuNzUxN0M0MC45NzE4IDMyLjc1MTcgNDAuMTAxNiAzMy42MjE5IDQwLjEwMTYgMzQuNjk1NEM0MC4xMDE2IDM1Ljc2ODkgNDAuOTcxOCAzNi42MzkxIDQyLjA0NTMgMzYuNjM5MVoiIGZpbGw9IiNDQzc0MDAiLz4KPHBhdGggZD0iTTQ2LjQxMzMgMzkuNzg5NUM0Ni44MjY0IDM5Ljc4OTUgNDcuMTYxMiAzOS40NTQ3IDQ3LjE2MTIgMzkuMDQxNkM0Ny4xNjEyIDM4LjYyODYgNDYuODI2NCAzOC4yOTM3IDQ2LjQxMzMgMzguMjkzN0M0Ni4wMDAzIDM4LjI5MzcgNDUuNjY1NCAzOC42Mjg2IDQ1LjY2NTQgMzkuMDQxNkM0NS42NjU0IDM5LjQ1NDcgNDYuMDAwMyAzOS43ODk1IDQ2LjQxMzMgMzkuNzg5NVoiIGZpbGw9IiNDQzc0MDAiLz4KPHBhdGggZD0iTTQ2LjQxMzMgMzYuMTkxM0M0Ni44MjY0IDM2LjE5MTMgNDcuMTYxMiAzNS44NTY1IDQ3LjE2MTIgMzUuNDQzNEM0Ny4xNjEyIDM1LjAzMDMgNDYuODI2NCAzNC42OTU1IDQ2LjQxMzMgMzQuNjk1NUM0Ni4wMDAzIDM0LjY5NTUgNDUuNjY1NCAzNS4wMzAzIDQ1LjY2NTQgMzUuNDQzNEM0NS42NjU0IDM1Ljg1NjUgNDYuMDAwMyAzNi4xOTEzIDQ2LjQxMzMgMzYuMTkxM1oiIGZpbGw9IiNDQzc0MDAiLz4KPHBhdGggZD0iTTEyLjMwOCAzNS45NTI5QzEzLjM4MTQgMzUuOTUyOSAxNC4yNTE3IDM1LjA4MjcgMTQuMjUxNyAzNC4wMDkyQzE0LjI1MTcgMzIuOTM1NyAxMy4zODE0IDMyLjA2NTUgMTIuMzA4IDMyLjA2NTVDMTEuMjM0NSAzMi4wNjU1IDEwLjM2NDMgMzIuOTM1NyAxMC4zNjQzIDM0LjAwOTJDMTAuMzY0MyAzNS4wODI3IDExLjIzNDUgMzUuOTUyOSAxMi4zMDggMzUuOTUyOVoiIGZpbGw9IiNBQTYxMDAiLz4KPHBhdGggZD0iTTkuMDgwMyAzOS4wNDE2QzkuNDkzMzYgMzkuMDQxNiA5LjgyODIxIDM4LjcwNjggOS44MjgyMSAzOC4yOTM3QzkuODI4MjEgMzcuODgwNyA5LjQ5MzM2IDM3LjU0NTggOS4wODAzIDM3LjU0NThDOC42NjcyNSAzNy41NDU4IDguMzMyNCAzNy44ODA3IDguMzMyNCAzOC4yOTM3QzguMzMyNCAzOC43MDY4IDguNjY3MjUgMzkuMDQxNiA5LjA4MDMgMzkuMDQxNloiIGZpbGw9IiNBQTYxMDAiLz4KPC9zdmc+Cg=="
  },
  {
    id: 1,
    title: "Некачественное мясо",
    type: "Магазинные продукты",
    isNegative: true,
    about:
      "Мясные полуфабрикаты, в&nbsp;которых содержится чрезмерно много натрия, вредных жиров, консервантов",
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ2LjY2NjYgMjYuMTMzM1YzMi42NjY2QzQ2LjY2NjYgNDEuMTYgMzcuMzMzMyA0Ni42NjY2IDMwLjI2OCA0Mi40MjkzTDI0LjY2OCAzOS4wNkMyMy44MDEzIDM4LjUzNTIgMjIuODA2NCAzOC4yNjA3IDIxLjc5MzMgMzguMjY2NkMyMC41MjU4IDM4LjE3NzQgMTkuMjYzOSAzOC41MDUyIDE4LjIgMzkuMkMxNi40NjE3IDQwLjM1OTUgMTQuMjI4NSA0MC40NzU1IDEyLjM3OTUgMzkuNTAyM0MxMC41MzA0IDM4LjUyOTEgOS4zNjE2NyAzNi42MjI2IDkuMzMzMzEgMzQuNTMzM1YyOEM5LjMzMzMxIDI5LjE5NDYgOS43MjUzMSAyOC44ODY2IDEwLjQ0NCAyOS44NjY2QzExLjU0NDQgMzEuMzIzNiAxMy4yODYgMzIuMTUyNSAxNS4xMTA2IDMyLjA4OEMxOC4wMzIgMzIuMDg4IDE4LjM0OTMgMzAuMjIxMyAyMS4yNzA2IDMwLjIyMTNDMjIuNDQ4MiAzMC4xMzc2IDIzLjYyMzQgMzAuNDE0MyAyNC42NCAzMS4wMTQ2TDMwLjI0IDM0LjAwMTNDMzQuMTY5MyAzNi4zNjI2IDM5LjEwNjYgMzUuOTYxMyA0My4zNjI2IDMxLjcwNTNDNDUuNDE2IDI5LjcwOCA0Ni42NjY2IDI5LjIzMiA0Ni42NjY2IDI2LjEzMzNaIiBmaWxsPSIjREY0RDYwIi8+CjxwYXRoIGQ9Ik00Ni42NjY2IDI2LjEzMzNDNDYuNjY2NiAzNC45NTMzIDM3LjA2MjYgMzkuOTg0IDMwLjI2OCAzNS44OTZMMjQuNjY4IDMyLjUyNjZDMjMuNjQ1OSAzMS45MjMxIDIyLjQ2MzggMzEuNjQ2MyAyMS4yOCAzMS43MzMzQzE4LjM1ODYgMzEuNzMzMyAxOC4wNDEzIDMzLjYgMTUuMTIgMzMuNkMxMy42MDI3IDMzLjY1MDYgMTIuMTI5OSAzMy4wODMgMTEuMDM5IDMyLjAyNzNDOS45NDgwMiAzMC45NzE1IDkuMzMyNDcgMjkuNTE4MSA5LjMzMzMxIDI4VjI3LjA2NjZDOS4zMzMzMSAxNy43MzMzIDIxLjQ2NjYgMTIuMTMzMyAzMC44IDEyLjEzMzNDNDEuMDY2NiAxMi4xMzMzIDQ2LjY2NjYgMTguNDA1MyA0Ni42NjY2IDI2LjEzMzNaIiBmaWxsPSIjRkI3Qjc2Ii8+CjxwYXRoIGQ9Ik0yOS44NjY3IDE2LjhDMjkuMzY4OSAxNi44MDA2IDI4Ljk1ODIgMTYuNDEwNSAyOC45MzM0IDE1LjkxMzNDMjguOTIwNiAxNS42NTc4IDI5LjAxMzIgMTUuNDA4MyAyOS4xODk3IDE1LjIyM0MyOS4zNjYxIDE1LjAzNzcgMjkuNjEwOSAxNC45MzMgMjkuODY2NyAxNC45MzM0SDMwLjhDMzEuMzE1NSAxNC45MzM0IDMxLjczMzQgMTUuMzUxMiAzMS43MzM0IDE1Ljg2NjdDMzEuNzMzNCAxNi4zODIxIDMxLjMxNTUgMTYuOCAzMC44IDE2LjhIMjkuODY2N1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMy42ODI3IDI1LjJDMTMuNTUwNiAyNS4xOTk0IDEzLjQyMDIgMjUuMTcwOCAxMy4zIDI1LjExNkMxMi44MzE3IDI0LjkwMzkgMTIuNjIzMSAyNC4zNTMxIDEyLjgzMzMgMjMuODg0QzE0LjkwNTMgMTkuMjgyNyAyMC45NjI3IDE2LjUyIDI1LjkgMTUuNDg0QzI2LjQxNTUgMTUuMzc1NyAyNi45MjExIDE1LjcwNTkgMjcuMDI5MyAxNi4yMjEzQzI3LjEzNzYgMTYuNzM2OCAyNi44MDc1IDE3LjI0MjQgMjYuMjkyIDE3LjM1MDdDMjAuNTk4NyAxOC41NTQ3IDE1Ljk2OTMgMjEuNDM4NyAxNC40OTQ3IDI0LjcwNTNDMTQuMzM0NiAyNS4wMDYxIDE0LjAyMzMgMjUuMTk1NyAxMy42ODI3IDI1LjJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzYuNCAyNy4wNjY2QzM4LjQ2MTkgMjcuMDY2NiA0MC4xMzM0IDI1LjM5NTIgNDAuMTMzNCAyMy4zMzMzQzQwLjEzMzQgMjEuMjcxNCAzOC40NjE5IDE5LjYgMzYuNCAxOS42QzM0LjMzODIgMTkuNiAzMi42NjY3IDIxLjI3MTQgMzIuNjY2NyAyMy4zMzMzQzMyLjY2NjcgMjUuMzk1MiAzNC4zMzgyIDI3LjA2NjYgMzYuNCAyNy4wNjY2WiIgZmlsbD0iI0Y1RUZDQSIvPgo8cGF0aCBkPSJNMjggNTZDMTIuNTM2IDU2IDAgNDMuNDY0IDAgMjhDMCAxMi41MzYgMTIuNTM2IDAgMjggMEM0My40NjQgMCA1NiAxMi41MzYgNTYgMjhDNTYgMzUuNDI2MSA1My4wNSA0Mi41NDggNDcuNzk5IDQ3Ljc5OUM0Mi41NDggNTMuMDUgMzUuNDI2MSA1NiAyOCA1NlpNMjggMS44NjY2N0MxMy41NjcgMS44NjY2NyAxLjg2NjY3IDEzLjU2NyAxLjg2NjY3IDI4QzEuODY2NjcgNDIuNDMzIDEzLjU2NyA1NC4xMzMzIDI4IDU0LjEzMzNDNDIuNDMzIDU0LjEzMzMgNTQuMTMzMyA0Mi40MzMgNTQuMTMzMyAyOEM1NC4xMzMzIDEzLjU2NyA0Mi40MzMgMS44NjY2NyAyOCAxLjg2NjY3WiIgZmlsbD0iI0U2NEMzQyIvPgo8cGF0aCBkPSJNNDcuMTQyNiA0OC4wNzZDNDYuODk0NiA0OC4wNzc0IDQ2LjY1NjEgNDcuOTggNDYuNDggNDcuODA1M0w4LjIxMzMyIDkuNTM4NjVDNy45NzMyMyA5LjMwNTIzIDcuODc1OTEgOC45NjE0NyA3Ljk1ODAxIDguNjM2ODRDOC4wNDAxMSA4LjMxMjIyIDguMjg5MTYgOC4wNTYwNiA4LjYxMTM1IDcuOTY0ODRDOC45MzM1MyA3Ljg3MzYzIDkuMjc5OSA3Ljk2MTIzIDkuNTE5OTggOC4xOTQ2NUw0Ny43ODY3IDQ2LjQ2MTNDNDcuOTYzMyA0Ni42MzY2IDQ4LjA2MjcgNDYuODc1MSA0OC4wNjI3IDQ3LjEyNEM0OC4wNjI3IDQ3LjM3MjggNDcuOTYzMyA0Ny42MTE0IDQ3Ljc4NjcgNDcuNzg2N0M0Ny42MTgxIDQ3Ljk2MzcgNDcuMzg2OSA0OC4wNjc2IDQ3LjE0MjYgNDguMDc2WiIgZmlsbD0iI0U2NEMzQyIvPgo8L3N2Zz4K"
  }
];

export default featuresList;
