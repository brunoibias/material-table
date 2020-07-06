
import _ from '@lodash';
import React from 'react';
import MaterialTable from 'material-table';


 const [state, setState] = React.useState({
    columns: [
        { title: 'Nome', field: 'name' ,},
        { title: 'Placa', field: 'placa' },
        { title: 'Ano', field: 'year', type: 'numeric' },
        { title: 'Cor', field: 'color' },
        ],
    data: [
    ],
});

<div className="p-16 sm:p-24 w-full">
    <Grid container spacing={2}>
        <Grid item sm={12} xs={12} className={classes.gridItem}>
            <MaterialTable
                title="Veícilos"
                columns={state.columns}
                data={state.data}
                editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data.push(newData);
                                    return { ...prevState, data };
                                });
                            }, 600);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                if (oldData) {
                                    setState((prevState) => {
                                        const data = [...prevState.data];
                                        data[data.indexOf(oldData)] = newData;
                                        return { ...prevState, data };
                                    });
                                }
                            }, 600);
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data.splice(data.indexOf(oldData), 1);
                                    return { ...prevState, data };
                                });
                            }, 600);
                        }),
                }}
                localization={{
                    body: {
                        emptyDataSourceMessage: 'Nenhum registro para exibir',
                        deleteTooltip: "Excluir",
                        addTooltip: 'Adicionar',
                        editTooltip: 'Editar',
                        editRow: {
                            deleteText: 'Tem certeza de que deseja excluir esta linha?',
                            cancelTooltip: 'Cancelar',
                            saveTooltip: 'Salvar'
                        },
                    },
                    header: {
                        actions: 'Ações',
                    },
                    toolbar: {
                        searchTooltip: 'Pesquisar',
                        searchPlaceholder: 'Pesquisar'
                    },
                    pagination: {
                        labelRowsSelect: 'linhas',
                        labelDisplayedRows: '{count} de {from}-{to}',
                        firstTooltip: 'Primeira página',
                        previousTooltip: 'Página anterior',
                        nextTooltip: 'Próxima página',
                        lastTooltip: 'Última página',

                    }
                }}
            />
        </Grid>
    </Grid>
</div>