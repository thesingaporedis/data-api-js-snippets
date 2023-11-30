import axios from 'axios';
import getDataGovCollections from '../src/getDataGovCollections';

jest.mock('axios');

// Mock console methods
global.console.log = jest.fn();
global.console.error = jest.fn();

describe('getDataGovCollections', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('fetches successfully data from an API', async () => {
    const data = { data: 'some data' };
    axios.get.mockResolvedValue(data);

    await getDataGovCollections();

    expect(console.log).toHaveBeenCalledWith('API Response:', data);
  });

  it('handles API call error', async () => {
    const errorMessage = 'API error';
    axios.get.mockRejectedValue(new Error(errorMessage));

    await getDataGovCollections();

    expect(console.error).toHaveBeenCalledWith('Error making API call:', errorMessage);
  });
});
