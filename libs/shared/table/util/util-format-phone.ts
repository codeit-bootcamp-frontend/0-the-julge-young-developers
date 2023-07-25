const utilFormatPhone = (phone: string) =>
  `${phone.slice(0, 3)}-${phone.slice(3, 7)}-${phone.slice(7, 11)}`

export { utilFormatPhone }
