import { LuEye } from '@/assets/icons'
import { Image, type ImageProps } from 'antd'

const AntdImage = ({ classNames, preview, ...props }: ImageProps) => {
  return (
    <Image
      classNames={{
        root: 'size-full',
        cover: '!bg-transparent',
        popup: {
          body: 'px-4',
        },
        ...classNames,
      }}
      preview={
        typeof preview === 'boolean'
          ? preview
          : {
              mask: true,
              cover: (
                <p className="flex items-center gap-1 rounded-2xl bg-black/50 px-3 py-1 text-xs">
                  <LuEye className="mt-0.5" /> Preview
                </p>
              ),
              ...preview,
            }
      }
      alt="image"
      {...props}
    />
  )
}
export default AntdImage
