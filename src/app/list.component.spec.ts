import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/angular';

import { ListComponent } from './list.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('the list component', () => {
  it('should find element by text', async () => {
    await render(ListComponent, {
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    expect(screen.getByText('Test works!')).toBeInTheDocument();
  });
});
