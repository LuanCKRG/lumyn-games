const FormLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-screen h-screen">
      <div className="p-4 m-auto border-2 border-black rounded-lg">
        {children}
      </div>
    </div>
  )
}

export default FormLayout