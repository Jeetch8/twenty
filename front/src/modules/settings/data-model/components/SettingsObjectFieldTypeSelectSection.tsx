import { H2Title } from '@/ui/display/typography/components/H2Title';
import { Select } from '@/ui/input/components/Select';
import { Section } from '@/ui/layout/section/components/Section';

import { dataTypes } from '../constants/dataTypes';
import { ObjectFieldDataType } from '../types/ObjectFieldDataType';

type SettingsObjectFieldTypeSelectSectionProps = {
  disabled?: boolean;
  onChange?: (value: ObjectFieldDataType) => void;
  type: ObjectFieldDataType;
};

// TODO: remove "relation" type for now, add it back when the backend is ready.
const { relation: _, ...dataTypesWithoutRelation } = dataTypes;

export const SettingsObjectFieldTypeSelectSection = ({
  disabled,
  onChange,
  type,
}: SettingsObjectFieldTypeSelectSectionProps) => (
  <Section>
    <H2Title
      title="Type and values"
      description="The field's type and values."
    />
    <Select
      disabled={disabled}
      dropdownScopeId="object-field-type-select"
      value={type}
      onChange={onChange}
      options={Object.entries(dataTypesWithoutRelation).map(
        ([key, dataType]) => ({
          value: key as ObjectFieldDataType,
          ...dataType,
        }),
      )}
    />
  </Section>
);