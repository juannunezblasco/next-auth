
export const ButtonSpinner = () => {
  return (
    <div className="flex h-6 items-center justify-center mr-2 w-6" >
    <span className="flex h-4 w-4 relative">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-600 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-4 w-4 bg-gray-600"></span>
    </span>
  </div>
  )
}
