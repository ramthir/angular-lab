import { Directive } from '@angular/core';

@Directive({
  selector: `[dataSource]`,
})
export class DataSourceDirective {
  name = 'Data from DataSource';

  constructor() {
    console.log({ select: 'test' });
  }
}
