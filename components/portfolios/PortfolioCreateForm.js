// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormGroup, Alert } from 'reactstrap';
import PortInput from '../form/PortInput'
import PortDate from '../form/PortDate'
import moment from "moment";


const validateInputs = (values) => {
  let errors = {};

  Object.entries(values).forEach(([key, value]) => {

    if (!values[key] && key !== 'endDate') {
      errors[key] = `Field ${key} is required!`;
    }


    const startDate = moment(values.startDate);
    const endDate = moment(values.endDate);

    if (startDate && endDate && endDate.isBefore(startDate)) {
      errors.endDate = 'End Date cannot be before start date!!!';
    }
  })

  return errors;
}
const PortfolioCreateForm = ({ initialValues, onSubmit, error }) => (
  <FormGroup>
    <Formik
      initialValues={initialValues}
      validate={validateInputs}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="title" label="Title" component={PortInput} />
          <Field type="text" label="company" name="company" component={PortInput} />
          <Field type="text" label="location" name="location" component={PortInput} />
          <Field type="text" label="position" name="position" component={PortInput} />
          <Field type="textarea" label="description" name="description" component={PortInput} />
          <Field
            label="start Date"
            initialDate={initialValues.startDate}
            name="startDate"
            component={PortDate} />
          <Field
            label="end Date"
            initialDate={initialValues.endDate}
            canBeDisabled={true}
            name="endDate"
            component={PortDate} />
          <Button color="success" size="lg" type="submit" disabled={isSubmitting}>
            Create
          </Button>
          {error &&
            <Alert color="danger">
              {error}
            </Alert>
          }
        </Form>
      )}
    </Formik>
  </FormGroup>
);

export default PortfolioCreateForm;