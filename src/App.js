import React from 'react';
import { QdtSelections, QdtPicasso, useBarChartSettings } from 'qdt-components';
import QdtComponent from './QdtComponent';

const App = () => {
  return (
        <div className="container">
        <div>
            <QdtComponent
            component={QdtSelections}
            properties={{
                qSelectionObjectDef: {},
            }}
            />
        </div>
        <div>
            <QdtComponent
                component={QdtPicasso}
                options={{
                    settings: useBarChartSettings(),
                    height: 400,
                }}
                properties={{
                    qHyperCubeDef: {
                    qDimensions: [
                        { qDef: { qFieldDefs: ['Fiscal Year'] } },
                        // { qDef: { qFieldDefs: ['Ship To State'] }, qNullSuppression : true }, // UNCOMMENT to check an example of working published app to "Everyone" stream
                    ],
                    qMeasures: [
                        { qDef: { qDef: 'Sum([Sector Revenue])', autoSort: false }, qSortBy: { qSortByNumeric: -1 } },
                        // { qDef: { qDef: 'Count (DISTINCT [Customer Number])'}, qSortBy: { qSortByNumeric: -1 } }, // UNCOMMENT to check an example of working published app to "Everyone" stream
                    ],
                    qInterColumnSortOrder: [1, 0],
                    },
                }}
            />
        </div>
    </div>
  );
}

export default App;