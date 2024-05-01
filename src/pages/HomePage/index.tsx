import React, {useEffect, useMemo, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '../../components/container';
import Table from '../../components/table';

interface University {
  name: string;
  country: string;
  web_pages: string[];
  alpha_two_code: string;
}

const columns = {
  name: {
    id: 'name',
    title: 'Name',
  },
  state: {
    id: 'state-province',
    title: 'State'
  }
};

const HomePage: React.FC = () => {
  const [universities, setUniversities] = useState<University[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortAlpha, setSortAlpha] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://universities.hipolabs.com/search?country=United%20Arab%20Emirates');
        const data: University[] = await response.json();
        setUniversities(data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const toggleSort = () => {
    setSortAlpha(!sortAlpha);
  };

  const items = useMemo(() => {
    const processedList = universities.filter(uni => {
      if (searchTerm) {
        return uni.name.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return true;
    });

    return sortAlpha ? processedList.sort((a, b) => a.name.localeCompare(b.name)) : processedList;
  }, [universities, searchTerm, sortAlpha]);

  const handleActionClick = (action: string, index: number) => {
    if (action === 'delete') {
      console.log(`id ${index}`);
    }
  };

  const handleRowClick = (university: University) => {
    navigate('/details', { state: { university } });
  };

  return (
    <Container>
      <h1>Universities in UAE</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search universities"
      />
      <button onClick={toggleSort}>{sortAlpha ? 'Unsort' : 'Sort'}</button>

      <Table
        data={items}
        columns={columns}
        actions={['delete']}
        onRowClick={handleRowClick}
        onActionClick={handleActionClick}
      />
    </Container>
  );
};

export default HomePage;
