import { z } from 'zod';
import { formatFileSize } from '../utils';

export const fileSchema = ({
  required = true,
  accept,
  maxSize = 5,
  maxLength,
  multiple = false,
}: {
  required?: boolean;
  accept?: string;
  maxSize?: number; // MB
  maxLength?: number;
  multiple?: boolean;
}) =>
  z.any().superRefine((files: FileList, ctx) => {
    // Convert to array for consistent handling
    const fileArray = Array.from(files || []);

    // --- Required ---
    if (required && fileArray.length === 0) {
      ctx.addIssue({
        code: 'custom',
        message: 'This field is required',
      });
    }

    // --- Accepted formats ---
    if (accept && fileArray.length > 0) {
      const accepted = accept.split(',').map((f) => f.trim());

      for (const file of fileArray) {
        const valid = accepted.some((acceptedType) => {
          // Handle wildcards like "image/*"
          if (acceptedType.endsWith('/*')) {
            const baseType = acceptedType.slice(0, -1); // Remove the *
            return file.type.startsWith(baseType);
          }
          // Exact match
          return (
            acceptedType === file.type ||
            (file.type === '' && file.name.endsWith('.heic'))
          );
        });

        if (!valid) {
          ctx.addIssue({
            code: 'custom',
            message: 'Invalid file format',
          });
          break;
        }
      }
    }

    // --- Max file size ---
    if (maxSize && fileArray.length > 0) {
      for (const file of fileArray) {
        if (file.size > maxSize * 1024 * 1024) {
          ctx.addIssue({
            code: 'custom',
            message: `File must be less than ${formatFileSize(maxSize)}`,
          });
          break;
        }
      }
    }

    // --- Max number of files ---
    if (multiple && maxLength && fileArray.length > maxLength) {
      ctx.addIssue({
        code: 'custom',
        message: `You can upload a maximum of ${maxLength} files`,
      });
    }
  });
