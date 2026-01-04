import { cn, getBase64ForUpload } from '@/lib/utils'
import { Upload, type UploadFile, type UploadProps } from 'antd'
import ImgCrop from 'antd-img-crop'
import { useState } from 'react'
import { Controller, type ControllerProps } from 'react-hook-form'
import AntdImage from '../antd/image'
import { CameraIcon } from '@/assets/icons'
// Props for the component
interface Props {
  name: string
  label?: string
  disabled?: boolean
  className?: string
  rules?: ControllerProps['rules']
  aspect?: number // e.g., 1 for square, 16/9 for widescreen
}

const PictureUpload = ({ name, rules, className }: Props) => {
  return (
    <Controller
      name={name}
      rules={rules}
      render={({ field: { value, onChange: _onChange } }) => {
        const defaultValue =
          value instanceof File ? URL.createObjectURL(value) : null

        const [fileList, setFileList] = useState<UploadFile[]>(() =>
          defaultValue
            ? [
                {
                  uid: '1',
                  name: 'logo.png',
                  status: 'done',
                  url: defaultValue,
                  thumbUrl: defaultValue,
                },
              ]
            : [],
        )
        const [previewOpen, setPreviewOpen] = useState(false)
        const [previewImage, setPreviewImage] = useState('')

        const onChange: UploadProps['onChange'] = ({ fileList }) => {
          setFileList(fileList)
          const file = fileList[0]?.originFileObj
          _onChange(file ? [file] : null)
        }

        const handlePreview = async (file: UploadFile) => {
          if (!file.url && !file.preview && file.originFileObj) {
            file.preview = await getBase64ForUpload(file.originFileObj)
          }

          setPreviewImage(file.url || (file.preview as string))
          setPreviewOpen(true)
        }
        return (
          <div className={cn('size-25 overflow-clip relative', className)}>
            <ImgCrop quality={1} modalTitle="Crop Image">
              <Upload
                // make size dependent on container, and remove padding
                className={cn(
                  'size-full [&_.ant-upload]:size-full [&_div.ant-upload]:bg-primary-50 [&_.ant-upload-list-item-container]:size-full',
                  '[&_.ant-upload-list-item-progress]:right-1/2 [&_.ant-upload-list-item-progress]:translate-x-1/2 [&_.ant-upload-list-item-progress]:-mb-1',
                )}
                listType="picture-circle"
                fileList={fileList}
                accept="image/*"
                onChange={onChange}
                onPreview={handlePreview}
                classNames={{
                  root: 'size-full',
                  list: 'size-full',
                  item: 'before:size-full p-0 [&_a]::text-xs [&_a]:content-center',
                }}
                maxCount={1}
                customRequest={({ onSuccess }) => {
                  onSuccess?.('ok')
                }}
              >
                {/* Placeholder user image */}
                {!fileList?.length && (
                  <img
                    src="/images/profile.svg"
                    alt="avatar"
                    className="size-1/3 object-contain"
                  />
                )}

                <span className="absolute bottom-0 right-0 rounded-full bg-white-light grid place-items-center clamp-[size,6,8]  text-primary-300">
                  <CameraIcon className="clamp-[size,4,5]" />
                </span>
              </Upload>
            </ImgCrop>

            {/* Image Preview */}
            {previewImage && (
              <AntdImage
                styles={{ root: { display: 'none' } }}
                preview={{
                  visible: previewOpen,
                  onVisibleChange: (visible) => setPreviewOpen(visible),
                  afterOpenChange: (visible) => !visible && setPreviewImage(''),
                }}
                src={previewImage}
              />
            )}
          </div>
        )
      }}
    />
  )
}

export default PictureUpload
