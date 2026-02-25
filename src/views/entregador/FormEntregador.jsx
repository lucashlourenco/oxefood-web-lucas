import InputMask from 'comigo-tech-react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import { useState } from 'react';

const ufOptions = [
    { key: 'ac', text: 'Acre', value: 'AC' },
    { key: 'al', text: 'Alagoas', value: 'AL' },
    { key: 'ap', text: 'Amapá', value: 'AP' },
    { key: 'am', text: 'Amazonas', value: 'AM' },
    { key: 'ba', text: 'Bahia', value: 'BA' },
    { key: 'ce', text: 'Ceará', value: 'CE' },
    { key: 'df', text: 'Distrito Federal', value: 'DF' },
    { key: 'es', text: 'Espírito Santo', value: 'ES' },
    { key: 'go', text: 'Goiás', value: 'GO' },
    { key: 'ma', text: 'Maranhão', value: 'MA' },
    { key: 'mt', text: 'Mato Grosso', value: 'MT' },
    { key: 'ms', text: 'Mato Grosso do Sul', value: 'MS' },
    { key: 'mg', text: 'Minas Gerais', value: 'MG' },
    { key: 'pa', text: 'Pará', value: 'PA' },
    { key: 'pb', text: 'Paraíba', value: 'PB' },
    { key: 'pr', text: 'Paraná', value: 'PR' },
    { key: 'pe', text: 'Pernambuco', value: 'PE' },
    { key: 'pi', text: 'Piauí', value: 'PI' },
    { key: 'rj', text: 'Rio de Janeiro', value: 'RJ' },
    { key: 'rn', text: 'Rio Grande do Norte', value: 'RN' },
    { key: 'rs', text: 'Rio Grande do Sul', value: 'RS' },
    { key: 'ro', text: 'Rondônia', value: 'RO' },
    { key: 'rr', text: 'Roraima', value: 'RR' },
    { key: 'sc', text: 'Santa Catarina', value: 'SC' },
    { key: 'sp', text: 'São Paulo', value: 'SP' },
    { key: 'se', text: 'Sergipe', value: 'SE' },
    { key: 'to', text: 'Tocantins', value: 'TO' }
]

export default function FormEntregador() {
    const [ativo, setAtivo] = useState('nao');

    return (

        <div>

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                    width={8}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'
                                    width={4}>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                    />

                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='RG'
                                    width={4}>
                                    <InputMask
                                        required
                                        mask="9.999.999"
                                    />
                                </Form.Input>

                            </Form.Group>


                            <Form.Group>

                                <Form.Select
                                    fluid
                                    label='UF'
                                    options={ufOptions}
                                    placeholder='Selecione'
                                />
                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Data Nascimento'
                                    width={6}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Celular'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='QTD Entregas Realizadas'
                                    width={4}>
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Valor Por Frete'
                                    width={4}>
                                </Form.Input>
                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Rua'
                                    width={12}
                                />

                                <Form.Input
                                    fluid
                                    label='Número'
                                    width={4}

                                />

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    maxLength="100"
                                    width={6}
                                />

                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    width={6}

                                />

                                <Form.Input
                                    fluid
                                    label='CEP'
                                    width={4}

                                />

                            </Form.Group>

                            <Form.Group widths={'equal'}>
                                <Form.Select
                                    fluid
                                    label='UF'
                                    placeholder='Selecione'
                                    options={ufOptions}
                                />
                            </Form.Group>

                            <Form.Group widths={'equal'}>
                                <Form.Input
                                    fluid
                                    label='Complemento'
                                />
                            </Form.Group>

                            <Form.Group inline>
                                <label>Ativo: </label>
                                <Form.Radio
                                    label='Sim'
                                    value='sim'
                                    checked={ativo == 'sim'}
                                    onChange={() => setAtivo('sim')}
                                />
                                <Form.Radio
                                    label='Não'
                                    value='nao'
                                    checked={ativo === 'nao'}
                                    onChange={() => setAtivo('nao')}
                                />
                            </Form.Group>
                        </Form>

                        <div style={{ marginTop: '4%' }}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Voltar
                            </Button>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>

                </Container>
            </div>
        </div>

    );

}
