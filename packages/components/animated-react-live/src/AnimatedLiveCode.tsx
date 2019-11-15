import React, {ComponentProps, useState} from 'react';
import {LiveProvider, LivePreview, LiveError} from 'react-live';
import AnimatedDiffMonaco from '../../animated-monaco/build/AnimatedDiffMonaco';
// @ts-ignore
import SplitGrid from 'react-split-grid';
import MediaController from './MediaController';

type Props = {
  initialValue: string;
  patches: Array<string>;
  monacoOptions: ComponentProps<typeof AnimatedDiffMonaco>['options'];
  reactLiveOptions: Omit<ComponentProps<typeof LiveProvider>, 'ref'>;
  containerProps: any;
};

const AnimatedDiffReactLive = ({
  initialValue,
  patches,
  monacoOptions,
  reactLiveOptions,
  containerProps,
}: Props) => {
  const [columns, setColumns] = useState('1fr 10px 1fr');

  return (
    <SplitGrid
      gridTemplateColumns={columns}
      onDrag={(_: any, __: any, columns: string) => setColumns(columns)}
      render={({getGridProps, getGutterProps}: any) => {
        const style = {
          ...containerProps.style,
          display: 'grid',
          gridTemplateColumns: columns,
          gridTemplateRows: '10fr 1fr',
        };
        return (
          <div {...getGridProps()} {...containerProps} style={style}>
            <MediaController
              render={(media, controls) => (
                <>
                  {media}
                  <div style={{gridColumn: '1 / span 3'}}>{controls}</div>
                </>
              )}
            >
              <AnimatedDiffMonaco
                initialValue={initialValue}
                patches={patches}
                style={{minWidth: 0, overflow: 'hidden'}}
                options={monacoOptions}
                render={(editor, api) => (
                  <>
                    {editor}
                    <div
                      {...getGutterProps('column', 1)}
                      style={{
                        background: 'black',
                        opacity: '0.5',
                        cursor: 'col-resize',
                      }}
                    />
                    <div>
                      <LiveProvider {...reactLiveOptions} code={api.value}>
                        <LiveError />
                        <LivePreview />
                      </LiveProvider>
                    </div>
                  </>
                )}
              />
            </MediaController>
          </div>
        );
      }}
    />
  );
};

export default AnimatedDiffReactLive;