import { useFormContext, useWatch } from 'react-hook-form';
import type { FileInputProps } from '@/types';
import { FileIcon, HiOutlineTrash, LuArrowUpToLine } from '@/assets/icons';
import FormErrorMessage from '../form/error-message';
import { useId } from 'react';

const FileInput = ({ label, name, accept, subtext }: FileInputProps) => {
  const { register, setValue } = useFormContext();

  const files = useWatch({ name });
  const uploaded = files && files.length > 0;
  const id = useId();

  return (
    <div>
      <label className="relative block cursor-pointer rounded-mxl bg-white fl-px-3/5 fl-py-2.5/3">
        <div className="flex items-center gap-[0.63rem]">
          <div className="grid place-items-center bg-primary-50 size-[2.44rem] rounded-full text-primary">
            <FileIcon />
          </div>
          <div>
            <p className="label mb-0">{label}</p>

            <p className="text-sm ">
              {uploaded ? (
                <span className="text-mavride-green">
                  Successfully uploaded
                </span>
              ) : (
                <span className="text-grey-600">{subtext}</span>
              )}
            </p>
          </div>

          {uploaded ? (
            <button
              type="button"
              className="absolute inset-y-0 right-4 z-10 content-center"
              onClick={(event) => {
                event.preventDefault();
                setValue(name, '');
              }}
            >
              <HiOutlineTrash className="size-5 text-mavride-black" />
            </button>
          ) : (
            <div className="ml-auto w-4">
              <LuArrowUpToLine className="size-5 text-grey-200" />
            </div>
          )}
        </div>
        <input hidden type="file" accept={accept} {...register(name)} />
      </label>

      <FormErrorMessage name={name} id={id} />
    </div>
  );
};
export default FileInput;
