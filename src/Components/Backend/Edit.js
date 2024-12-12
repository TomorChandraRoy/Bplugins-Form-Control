import { useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import {
  Button,
  CheckboxControl,
  DateTimePicker,
  ExternalLink,
  Flex,
  FlexBlock,
  FormFileUpload,
  __experimentalInputControl as InputControl,
  ResponsiveWrapper,
  SelectControl,
} from "@wordpress/components";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import { useState } from "react";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;
  const { purposeType } = attributes;

  const [date, setDate] = useState(new Date());
  const [user, setUser] = useState("");

  const [fileName, setFileName] = useState("");
  console.log(fileName);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const [ isChecked, setChecked ] = useState( true );

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />

        <div className="bBlocksTestPurpose">
          {purposeType === "test" ? (
            <>
              {/* <div style={{ display: "flex", gap: "30px", width: "full" }}>
                <div>
                  <InputControl
                    label="InputControl"
                    labelPosition="top"
                    value=""
                    type="email"
                    isPressEnterToChange
                    onChange={(nextValue) => console.log(nextValue)}
                  />
                </div>
                <div>
                  <InputControl
                    label="InputControl"
                    labelPosition="top"
                    value=""
                    type="email"
                    isPressEnterToChange
                    onChange={(nextValue) => console.log(nextValue)}
                  />
                </div>
              </div> */}
              <ResponsiveWrapper naturalWidth={2000} naturalHeight={1500}>
                <img
                  src="https://i.ibb.co.com/Q9M3JPt/1686645486825.jpg"
                  alt="WordPress"
                />
              </ResponsiveWrapper>

              <h4>Name</h4>
              <Flex>
                <FlexBlock>
                  <InputControl
                    labelPosition="top"
                    placeholder="First Name"
                    value=""
                    type="text"
                    isPressEnterToChange
                    onChange={(nextValue) => console.log(nextValue)}
                  />
                </FlexBlock>
                <FlexBlock>
                  <InputControl
                    labelPosition="top"
                    placeholder="Last Name"
                    value=""
                    type="text"
                    isPressEnterToChange
                    onChange={(nextValue) => console.log(nextValue)}
                  />
                </FlexBlock>
              </Flex>

              <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                <h4>Age</h4>
                <InputControl
                  labelPosition="top"
                  placeholder="Ex:25"
                  value=""
                  type="number"
                  isPressEnterToChange
                  onChange={(nextValue) => console.log(nextValue)}
                />
              </div>

              <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                <h4>Date of Birth</h4>
                <DateTimePicker
                  currentDate={date}
                  onChange={(newDate) => setDate(newDate)}
                  is12Hour={true}
                />
              </div>

              <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                <h4>{__("Gender")}</h4>
                <SelectControl
                  value={user || ""}
                  onChange={(selectedUser) => {
                    setUser(selectedUser);
                  }}
                  options={[
                    { value: "", label: "Select a User", disabled: true },
                    { value: "a", label: "User A" },
                    { value: "b", label: "User B" },
                    { value: "c", label: "User c" },
                  ]}
                />
              </div>

              <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                <h4>Email</h4>
                <InputControl
                  labelPosition="top"
                  placeholder="example@gmail.com"
                  value=""
                  type="Email"
                  isPressEnterToChange
                  onChange={(nextValue) => console.log(nextValue)}
                />
              </div>

              <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                <h4>Address</h4>
                <InputControl
                  labelPosition="top"
                  placeholder="Street address"
                  value=""
                  type="text"
                  isPressEnterToChange
                  onChange={(nextValue) => console.log(nextValue)}
                />
              </div>

              <div style={{ marginTop: "10px", marginBottom: "20px" }}>
                <InputControl
                  labelPosition="top"
                  placeholder="Street address 2"
                  value=""
                  type="text"
                  isPressEnterToChange
                  onChange={(nextValue) => console.log(nextValue)}
                />
              </div>

              <h4>Phone</h4>
              <Flex>
                <FlexBlock>
                  <InputControl
                    labelPosition="top"
                    placeholder="Area Code"
                    value=""
                    type="text"
                    isPressEnterToChange
                    onChange={(nextValue) => console.log(nextValue)}
                  />
                </FlexBlock>
                <FlexBlock>
                  <InputControl
                    labelPosition="top"
                    placeholder="Phone Numder"
                    value=""
                    type="text"
                    isPressEnterToChange
                    onChange={(nextValue) => console.log(nextValue)}
                  />
                </FlexBlock>
              </Flex>

              <div>
                <Flex>
                  <FlexBlock>
                    <h4>Post/Zip code</h4>
                  </FlexBlock>
                  <FlexBlock>
                    <h4>City</h4>
                  </FlexBlock>
                </Flex>
              </div>

              <Flex>
                <FlexBlock>
                  <InputControl
                    labelPosition="top"
                    placeholder="Ex:465464"
                    value=""
                    type="text"
                    isPressEnterToChange
                    onChange={(nextValue) => console.log(nextValue)}
                  />
                </FlexBlock>
                <FlexBlock>
                  <InputControl
                    placeholder="Ex:Bangladesh"
                    value=""
                    type="text"
                    isPressEnterToChange
                    onChange={(nextValue) => console.log(nextValue)}
                  />
                </FlexBlock>
              </Flex>

              <div style={{ marginTop: "10px", marginBottom: "20px" }}>
                <FormFileUpload
                  accept="image/*"
                  onChange={handleFileChange}
                  render={({ openFileDialog }) => (
                    <div>
                      <Button isSecondary onClick={openFileDialog}>
                        Upload image
                      </Button>
                      <span style={{ marginLeft: '10px' }}>{fileName ? fileName : "No file chosen"}</span>{" "}
                      {/* Show file name or "No file chosen" */}
                    </div>
                  )}
                />
              </div>


              <div style={{ marginTop: "10px", marginBottom: "20px" }}>
              <CheckboxControl
            __nextHasNoMarginBottom
            label={
              <>
                I agree to the defined{' '}
                <ExternalLink href="https://wordpress.org">terms, conditions, and policies</ExternalLink>
              </>
            } 

            checked={ isChecked }
            onChange={ setChecked }
        />
              </div>

              <div><Button isPrimary>Button</Button></div>
            </>
          ) : (
            <p>
              If someone sends you an invitation to a party, for example, they
              are telling you what time to arrive and what the sender is
              celebrating, and they might even.
            </p>
          )}
        </div>
      </div>
    </>
  );
};
export default Edit;
