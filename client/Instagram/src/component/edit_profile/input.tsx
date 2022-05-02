interface IProps {
  title: string,
  row: string,
  value: string,
  name: string,
  handleCahnge: any
}

export default function InputEdit ({ title, row, value, name, handleCahnge }: IProps) {
  return (
        <>
            <h3 className={`row-start-${row} text-right text-base font-semibold w-7/12 m-auto`}>{title}</h3>
            <input
            name={name}
            onChange={handleCahnge}
            className={`row-start-${row} col-start-2 col-end-5 px-2 py-1 border border-inherit rounded-sm outline-0`}
            placeholder={title} value={value}/>
        </>
  )
}
