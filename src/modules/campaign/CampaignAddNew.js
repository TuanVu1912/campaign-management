import FormGroup from "components/common/FormGroup";
import FormRow from "components/common/FormRow";
import { Dropdown } from "components/dropdown";
import { Input, Textarea } from "components/input";
import { Label } from "components/label";
import { values } from "lodash";
import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageUploader from "quill-image-uploader";
import { Form } from "react-router-dom";
import { Button } from "components/button";
Quill.register("modules/imageUploader", ImageUploader);

const CampaignAddNew = () => {
  const { handleSubmit, control } = useForm();
  const [content, setContent] = React.useState("");
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        // imgbbAPI
        upload: async (file) => {
          //   const bodyFormData = new FormData();
          //   bodyFormData.append("image", file);
          //   const response = await axios({
          //     method: "post",
          //     url: imgbbAPI,
          //     data: bodyFormData,
          //     headers: {
          //       "Content-Type": "multipart/form-data",
          //     },
          //   });
          //   return response.data.data.url;
        },
      },
    }),
    []
  );
  const handleAddNewCampaign = (values) => {
    console.log(values);
  };
  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      <div className="text-center">
        <h1 className="py-4 px-14 bg-text4 text-text2 bg-opacity-5 font-bold text-[25px] inline-block mb-10">
          Start a Campaign🚀
        </h1>
        <form onClick={handleSubmit(handleAddNewCampaign)}>
          <FormRow>
            <FormGroup>
              <Label htmlFor="title" className="ml-1">
                Campaign Title *
              </Label>
              <Input
                control={control}
                name="title"
                placeholder="Write a title"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="title" className="ml-1">
                Select a category *
              </Label>
              <Dropdown>
                <Dropdown.Select placeholder="Select the category"></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Option>Architecture</Dropdown.Option>
                  <Dropdown.Option>Crypto</Dropdown.Option>
                </Dropdown.List>
              </Dropdown>
            </FormGroup>
          </FormRow>
          <FormGroup>
            <Label>Short Description *</Label>
            <Textarea
              name="short_description"
              placeholder="Write a short description..."
              control={control}
            ></Textarea>
          </FormGroup>
          <FormGroup>
            <Label>Story *</Label>
            <ReactQuill
              placeholder="Write your story..."
              modules={modules}
              theme="snow"
              value={content}
              onChange={setContent}
            ></ReactQuill>
          </FormGroup>
          <FormRow>
            <FormGroup>
              <Label className="ml-1">Goal *</Label>
              <Input
                control={control}
                name="goal"
                placeholder="$0.00 USD"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label className="ml-1">Raised amount *</Label>
              <Input
                control={control}
                name="amount"
                placeholder="$0.00 USD"
              ></Input>
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label className="ml-1">Amount Prefilled</Label>
              <Input
                control={control}
                name="prefilled"
                placeholder="Amount Prefilled "
              ></Input>
              <p className="text-left font-sm text-text3">
              It will help amount box by click, place each amount by comma, ex:
              10,20,30,40
            </p>
            </FormGroup>
            
            <FormGroup>
              <Label className="ml-1">Video</Label>
              <Input control={control} name="video" placeholder="Video">
              </Input>
              <p className="text-left font-sm text-text3">
              Place Youtube or Vimeo Video URL  
            </p>
            </FormGroup>
          </FormRow>
          <FormRow>
          <FormGroup>
              <Label className="ml-1">
                Campaign End Method 
              </Label>
              <Dropdown>
                <Dropdown.Select placeholder="Select one"></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Option>Architecture</Dropdown.Option>
                  <Dropdown.Option>Crypto</Dropdown.Option>
                </Dropdown.List>
              </Dropdown>
            </FormGroup>
            <FormGroup>
              <Label  className="ml-1">
                Counntry
              </Label>
              <Dropdown>
                <Dropdown.Select placeholder="Select country "></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Option>Architecture</Dropdown.Option>
                  <Dropdown.Option>Crypto</Dropdown.Option>
                </Dropdown.List>
              </Dropdown>
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
            <Label  className="ml-1">
                Start Date
              </Label>
              <Input
                control={control}
                name="start_date"
                placeholder="Start Date"
              ></Input>
            </FormGroup>
            <FormGroup>
            <Label  className="ml-1">
                End Date
              </Label>
              <Input
                control={control}
                name="end_date"
                placeholder="End Date"
              ></Input>
            </FormGroup>
          </FormRow>
          <div className="text-center mt-10">
            <Button kind="primary" className="mx-auto px-10 mt-10">Submit new campaign</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampaignAddNew;
