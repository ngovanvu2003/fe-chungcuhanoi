import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { yupResolver } from "@hookform/resolvers/yup";
import { schemaAddCate } from "@/schemas/categories";
import { AddProject, DeleteProject, UpdateProject } from "@/app/api/projects";

type FormControlType = {
  project_name: string;
  map_link: string;
  project_location: string;
  project_district: string;
  project_wards: string;
  project_price: number;
  project_acreage: number;
  project_room: number;
  project_image: [];
  project_view: number;
  categoryId: string;
  status: number;
};

type useProductMutationProps = {
  action: "CREATE" | "UPDATE" | "DELETE";
  defaultValues?: any;
  onSuccess?: () => void;
};
export const useProjectMutation = ({
  action,
  defaultValues = {
    project_name: "",
    map_link: "",
    project_location: "",
    project_district: "",
    project_wards: "",
    project_price: "",
    project_acreage: "",
    project_room: "",
    project_image: "",
    project_view: "",
    categoryId: "",
    description_group: {
      overview: {
        description: "",
        image: "",
      },
      location: {
        // Vị trí
        description: "",
        image: [],
        image_description: "",
      },
      utilities: {
        // tiện ích
        title: "",
        description: "",
        image: [
          {
            image: "",
            image_description: "",
          },
        ],
      },
      floor_design: [
        // thiết kế mặt bằng
        {
          title: "",
          image: "",
          image_description: "",
          description_detail: "",
        },
      ],
      utilities_additional: [
        {
          // tiện ích bổ sung
          title: "",
        },
      ],
    },
    status: "",
  },
  onSuccess,
}: useProductMutationProps) => {
  const queryClient = useQueryClient();

  const form = useForm<FormControlType>({
    // resolver: yupResolver(schemaAddCate),
    defaultValues,
  });
  const { mutate, ...rest } = useMutation({
    mutationFn: async (product: any) => {
      switch (action) {
        case "CREATE":
          return await AddProject(product);
        case "UPDATE":
          return await UpdateProject(product);
        case "DELETE":
          return await DeleteProject(product._id!);
        default:
          return null;
      }
    },
    onSuccess: () => {
      // thêm | cập nhật thành công
      queryClient.invalidateQueries({
        queryKey: ["PROJECT_ID"],
      });
      onSuccess && onSuccess();
    },
  });
  const onSubmit: SubmitHandler<FormControlType> = (values) => {
    mutate(values as any);
  };

  return {
    form,
    onSubmit,
    ...rest,
  };
};
