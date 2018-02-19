import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';

const GeneralProductForm = props => (
  <Grid container>
    <Grid item xs={12} md={6}>
      <Grid container>
        <Grid item xs={12} md={9}>
          <TextField
            label="Nome"
            value={props.product.name}
            name="name"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={
              event => props.onChangeProduct(event)
            }
          />
          <TextField
            label="Preço"
            value={props.product.price}
            name="price"
            margin="normal"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            onChange={
              event => props.onChangeProduct(event)
            }
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            label="Ano Fabricação"
            name="fabricationYear"
            value={props.product.fabricationYear}
            margin="normal"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            onChange={
              event => props.onChangeProduct(event)
            }
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            label="Ano Modelo"
            value={props.product.modelYear}
            margin="normal"
            type="number"
            fullWidth
            maxLength="4"
            name="modelYear"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={
              event => props.onChangeProduct(event)
            }
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            label="Marca"
            value={props.product.brand}
            name="brand"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={
              event => props.onChangeProduct(event)
            }
          />
          <TextField
            label="Modelo"
            value={props.product.model}
            name="model"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={
              event => props.onChangeProduct(event)
            }
          />
          <TextField
            label="Versão"
            value={props.product.version}
            name="version"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={
              event => props.onChangeProduct(event)
            }
          />
          <TextField
            id="multiline-static"
            label="Observações"
            value={props.product.description}
            name="description"
            multiline
            rows="4"
            InputLabelProps={{
                shrink: true,
              }}
            onChange={
                event => props.onChangeProduct(event)
              }
            fullWidth
            placeholder="Descreva informações sobre o veículo"
            margin="normal"
          />
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12} md={3}>
      <label htmlFor="driverAirbag">
        <Checkbox
          id="driverAirbag"
          defaultChecked={props.product.driverAirbag}
          name="driverAirbag"
          onChange={
            event => props.onChangeProduct(event)
          }
        />
        Airbag do Motorista
      </label>
    </Grid>
    <Grid item xs={12} md={3}>
      <label htmlFor="doubleAirbag">
        <Checkbox
          id="doubleAirbag"
          defaultChecked={props.product.doubleAirbag}
          name="doubleAirbag"
          onChange={
            event => props.onChangeProduct(event)
          }
        />
        Airbag Duplo
      </label>
    </Grid>
  </Grid>

);

GeneralProductForm.propTypes = {
  product: PropTypes.objectOf(PropTypes.string),
  onChangeProduct: PropTypes.func,
};
GeneralProductForm.defaultProps = {
  product: {},
  onChangeProduct: () => {},
};

export default GeneralProductForm;
